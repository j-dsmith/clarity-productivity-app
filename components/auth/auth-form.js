import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import {
  LoginPageContainer,
  StyledFormContainer,
  StyledFormHeader,
  StyledForm,
  StyledTextInput,
} from './auth.styles.js';
import { MdArrowForward } from 'react-icons/md';

import { VscKey } from 'react-icons/vsc';
import FormBtn from './form-btn';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isGuest, setIsGuest] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  //get router
  const router = useRouter();

  const switchAuthModeHandler = () => {
    setIsLogin(!isLogin);
    setEmailValue('');
    setPasswordValue('');
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (isLogin) {
      // Log user in
      const result = await signIn('credentials', {
        redirect: false,
        email: emailValue,
        password: passwordValue,
      });
      console.log(result);

      if (!result.error) {
        setEmailValue('');
        setPasswordValue('');
        router.replace('/');
      }
    } else if (isGuest) {
      const result = await signIn('credentials', {
        redirect: false,
        email: process.env.GUEST_EMAIL,
        password: process.env.GUEST_PASSWORD,
      });
      if (!result.error) {
        setEmailValue('');
        setPasswordValue('');
        setIsGuest(false);
        router.replace('/');
      }
    } else {
      // Create new user
      try {
        const response = await axios.post('/api/auth/signup', {
          email: emailValue,
          password: passwordValue,
        });

        const user = await signIn('credentials', {
          redirect: false,
          email: emailValue,
          password: passwordValue,
        });
        router.replace('/');
        setIsLoading(false);
      } catch (error) {
        const {
          response: { data },
        } = error;
        alert(data.message);
      }
    }
  };

  return (
    <LoginPageContainer>
      <StyledFormContainer>
        <StyledFormHeader>
          <h1>{isLogin ? 'Login to Your Account' : 'Create Account'}</h1>
          <p>
            Track <span className="highlight">tasks</span>, organize ideas into{' '}
            <span className="highlight">projects</span>, review with{' '}
            <span className="highlight">study decks</span>, and write out your
            next masterpiece in a fully featured RichText editor
          </p>
        </StyledFormHeader>

        <StyledForm onSubmit={submitHandler}>
          <StyledTextInput
            type="email"
            name="email"
            id="email"
            placeholder={isLogin ? 'Your Email Address' : 'Email Address'}
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            whileHover="hover"
          />
          <StyledTextInput
            type="Password"
            name="Password"
            id="Password"
            placeholder={isLogin ? 'Your Password' : 'Password'}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            whileHover="hover"
          />
          <FormBtn
            text={isLogin ? 'Login to Your Account' : 'Create Account'}
            textcolor="light"
            icon={<MdArrowForward />}
            isLoading={isLoading}
            isDisabled={!emailValue || !passwordValue ? true : false}
          />
          <FormBtn
            text="Continue as a Guest"
            outline="true"
            icon={<VscKey />}
            iconType="provider"
          />
        </StyledForm>

        <div className="loginStateControl" onClick={switchAuthModeHandler}>
          {isLogin ? 'Not registered? ' : 'Already have an account? '}
          <span>{isLogin ? 'Sign up' : 'Login'}</span>
        </div>
      </StyledFormContainer>
    </LoginPageContainer>
  );
};

export default AuthForm;
