import { useState } from 'react';
import { LoginPageContainer, Header, ContentContainer } from './auth.styles';
import MyForm from './formik-form';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <LoginPageContainer>
      <ContentContainer>
        <Header>
          <h1>{showLogin ? 'Login to Your Account' : 'Create Account'}</h1>
          <p>
            Track <span className="highlight">tasks</span>, organize ideas into{' '}
            <span className="highlight">projects</span>, review with{' '}
            <span className="highlight">study decks</span>, and write out your
            next masterpiece in a fully featured RichText editor
          </p>
        </Header>
        <MyForm showLogin={showLogin} setShowLogin={setShowLogin} />
      </ContentContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
