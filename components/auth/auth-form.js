import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { createUser } from '../../helpers/auth';
import {
  StyledLoginPage,
  StyledFormContainer,
  StyledFormHeader,
  StyledForm,
  StyledFormControls,
  StyledTextInput,
  StyledDivider,
} from './auth.styles.js';
import { MdArrowForward } from 'react-icons/md';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { VscKey } from 'react-icons/vsc';
import FormBtn from './form-btn';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  //get router
  const router = useRouter();

  const switchAuthModeHandler = () => {
    setEmailValue('');
    setPasswordValue('');
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (isLogin) {
      // Log user in
      const result = await signIn('credentials', {
        redirect: false,
        email: emailValue,
        password: passwordValue,
      });

      if (!result.error) {
        router.replace('/');
      }
    } else {
      // Create new user
      try {
        const result = await createUser(emailValue, passwordValue);
        router.replace('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const inputVariant = {
    hover: {
      transition: { duration: 0.5, type: 'spring' },
      scale: 1.06,
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  };

  return (
    <StyledLoginPage>
      <StyledFormContainer>
        <StyledFormHeader>
          <h1>{isLogin ? 'Login to Your Account' : 'Create Account'}</h1>
          <p>
            Track <span id="tasks-span">tasks</span>, organize ideas into{' '}
            <span id="projects-span">projects</span>, review with{' '}
            <span id="decks-span">study decks</span>, and write out your next
            masterpiece in a fully featured RichText editor
          </p>
        </StyledFormHeader>
        <StyledForm onSubmit={submitHandler}>
          <StyledFormControls>
            <StyledTextInput
              type="email"
              name="email"
              id="email"
              placeholder={isLogin ? 'Your Email Address' : 'Email Address'}
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              required
              variants={inputVariant}
              whileHover="hover"
            />
            <StyledTextInput
              type="Password"
              name="Password"
              id="Password"
              placeholder={isLogin ? 'Your Password' : 'Password'}
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              required
              variants={inputVariant}
              whileHover="hover"
            />
            <FormBtn
              text={isLogin ? 'Login to Your Account' : 'Create Account'}
              textcolor="light"
              // outline="false"
              icon={<MdArrowForward />}
            />
          </StyledFormControls>
          <StyledDivider>/</StyledDivider>
          <StyledFormControls>
            <FormBtn
              text={isLogin ? 'Login with Google' : 'Sign up with Google'}
              outline="true"
              icon={<BsGoogle />}
              iconType="provider"
            />
            <FormBtn
              text={isLogin ? 'Login with Github' : 'Sign up with Github'}
              outline="true"
              icon={<BsGithub />}
              iconType="provider"
            />
            <FormBtn
              text={'Continue As Guest'}
              outline="true"
              icon={<VscKey />}
              iconType="provider"
            />
          </StyledFormControls>
        </StyledForm>
        <div className="loginStateControl" onClick={switchAuthModeHandler}>
          {isLogin ? 'Not registered? ' : 'Already have an account? '}
          <span>{isLogin ? 'Sign up' : 'Login'}</span>
        </div>
      </StyledFormContainer>
    </StyledLoginPage>
  );
};

export default AuthForm;
