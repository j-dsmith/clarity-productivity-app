// Dependencies
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { signIn } from 'next-auth/react';
import axios from 'axios';

// Style
import {
  StyledForm,
  StyledField,
  StyledErrorMessage,
  SubmitBtn,
  GuestLoginBtn,
  LoginController,
} from './auth.styles';
import { MdArrowForward } from 'react-icons/md';
import { VscKey } from 'react-icons/vsc';

// Components
import Loader from 'react-loader-spinner';
import { generateGuestAccount } from '../../helpers/auth';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password can be at most 20 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must contain one upper case, one lowercase, and one symbol'
    )
    .required('Required'),
});

const MyForm = ({ showLogin, setShowLogin }) => {
  // Init loading state to control loading spinner
  const [loginSubmitLoading, setLoginSubmitLoading] = useState(false);
  const [guestSubmitLoading, setGuestSubmitLoading] = useState(false);

  // Framer-motion variant for form buttons
  const btn = {
    hover: {
      transition: { duration: 0.5, type: 'spring' },
      scale: 1.03,
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    },
  };

  //get router
  const router = useRouter();

  const handleGuestLogin = async () => {
    setGuestSubmitLoading(true);
    const { email, password } = generateGuestAccount();

    const response = await axios.post('/api/auth/signup', {
      email,
      password,
      isGuest: true,
    });

    if (!response.error) {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (!result.error) {
        router.replace('/');
      }
    }
  };

  const submitHandler = async (values, { setSubmitting }) => {
    // event.preventDefault();
    setLoginSubmitLoading(true);

    if (showLogin) {
      // Log user in
      const result = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (!result.error) {
        setSubmitting(false);
        router.replace('/');
      }
    } else {
      // Create new user
      try {
        const response = await axios.post('/api/auth/signup', {
          email: values.email,
          password: values.password,
          isGuest: false,
        });

        const user = await signIn('credentials', {
          redirect: false,
          email: values.email,
          password: values.password,
        });
        router.replace('/');
        setSubmitting(false);
      } catch (error) {
        const {
          response: { data },
        } = error;
        alert(data.message);
      }
    }
  };

  const switchAuthModeHandler = (formik) => {
    setShowLogin(!showLogin);
    formik.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {(formik) => (
        <>
          <StyledForm>
            {/* TODO: Add styled components for these form fields and labels */}

            <StyledField name="email" type="text" placeholder="Email" />
            {formik.touched.email && formik.errors.email ? (
              <StyledErrorMessage>{formik.errors.email}</StyledErrorMessage>
            ) : null}

            {/* Password */}

            <StyledField
              name="password"
              type="password"
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <StyledErrorMessage>{formik.errors.password}</StyledErrorMessage>
            ) : null}

            <SubmitBtn
              id="login"
              type="submit"
              bgcolor="primary"
              variants={btn}
              whileHover="hover"
            >
              <p>{showLogin ? 'Login to Your Account' : 'Create Account'}</p>
              {loginSubmitLoading ? (
                <Loader type="Oval" color="#fff" height={20} width={20} />
              ) : (
                <MdArrowForward className="icon" />
              )}
            </SubmitBtn>
          </StyledForm>
          {!showLogin && (
            <GuestLoginBtn
              id="guest"
              type="submit"
              outline="true"
              textdark="true"
              variants={btn}
              whileHover="hover"
              onClick={handleGuestLogin}
            >
              <p>Continue as Guest</p>
              {guestSubmitLoading ? (
                <Loader type="Oval" color="#000" height={20} width={20} />
              ) : (
                <VscKey className="icon" />
              )}
            </GuestLoginBtn>
          )}
          <LoginController>
            Already have an account?{' '}
            <span
              className="login-controller"
              onClick={() => switchAuthModeHandler(formik)}
            >
              Login
            </span>
          </LoginController>
        </>
      )}
    </Formik>
  );
};

export default MyForm;
