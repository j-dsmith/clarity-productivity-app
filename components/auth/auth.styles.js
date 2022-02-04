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
    padding: 0.25rem 0.125rem;
    border-radius: 0.5rem;
    box-shadow: 0.5px 1px 1px hsl(220deg 60% 50% / 0.7);
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

  &:focus {
    box-shadow: var(--shadow-sm);
  }
`;

export const StyledErrorMessage = styled.div`
  margin-bottom: 1em;
  margin-left: 1em;
  color: var(--color-red);
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  padding: 1.25em 1em;
  margin-block: 0.5em;
  border-radius: 0.75em;
  border: var(--border);
  background-color: var(--bg-color);
  color: var(--text-color);
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: all 150ms linear;

  &:hover {
    transform: scale(1.03);
    box-shadow: var(--box-shadow);
  }

  p {
    margin: 0;
    padding: 0;
  }

  svg {
    display: grid;
    place-items: center;
    font-size: 1.25rem;
    filter: drop-shadow(var(--icon-shadow));
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
