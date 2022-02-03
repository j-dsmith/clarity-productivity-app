import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';

export const LoginPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--page-bg-light);
  color: var(--text-dark);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
`;

export const Header = styled.div`
  h1 {
    font-size: 3rem;
    margin: 0.5em;
    text-align: center;
  }

  p {
    font-size: 1.25rem;
    text-align: center;
  }

  .highlight {
    background-color: var(--color-blue);
    color: var(--text-light);
    text-shadow: var(--shadow-sm);
    padding: 0 0.125rem;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding-inline: 1em;

  .login-mode-controller {
    text-align: center;
  }
`;

export const StyledField = styled(Field)`
  font-size: 1rem;
  padding: 1.25em 1em;
  margin-block: 0.5em;
  border-radius: 0.75em;
  border: 1px solid var(--color-gray-400);
`;

export const StyledErrorMessage = styled.div`
  margin-bottom: 1em;
  margin-left: 1em;
  color: var(--color-red);
`;

export const SubmitBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  padding: 1.25em 1em;
  margin-block: 0.5em;
  border-radius: 0.75em;
  border: ${({ outline }) =>
    outline ? `1px solid var(--color-gray-400)` : 'none'};
  background-color: ${({ bgcolor }) =>
    bgcolor === 'primary' ? '1px solid var(--color-blue)' : 'transparent'};
  color: ${({ textdark }) =>
    textdark ? 'var(--text-dark)' : 'var(--text-light)'};
  font-weight: 600;
  text-align: left;
  cursor: pointer;

  p {
    margin: 0;
    padding: 0;
  }

  svg {
    display: grid;
    place-items: center;
    font-size: 1.25rem;
  }
`;

export const GuestLoginBtn = styled(SubmitBtn)`
  margin-inline: 1em;
`;

export const LoginController = styled.p`
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.brandPrimary};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SpinnerContainer = styled.div``;
