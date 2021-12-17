import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLoginPage = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cultured};
  color: ${({ theme }) => theme.colors.gray900};
`;

export const StyledFormContainer = styled.div`
  height: 70%;
  width: 70%;

  .loginStateControl {
    text-align: center;
    font-size: 0.85rem;

    span {
      text-decoration: underline;
      cursor: pointer;
      /* transition: all 100ms ease-in-out; */

      &:hover {
        color: ${({ theme }) => theme.colors.bluecrayola};
      }
    }
  }
`;

export const StyledFormHeader = styled.div`
  height: 35%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1,
  p {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 3rem;
    margin: 1rem;
  }

  p {
    width: 70%;
    line-height: 1.5rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.gray700};

    .highlight {
      background-color: ${({ theme }) => theme.colors.brandPrimary};
      color: ${({ theme }) => theme.colors.cultured};
      text-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);
      padding: 0 0.125rem;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  height: 65%;
`;

export const StyledFormControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
`;

export const StyledTextInput = styled.input`
  height: 4rem;
  margin: 0 3rem 1rem 3rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray700};
  background-color: ${({ theme }) => theme.colors.cultured};
  padding: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray700};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.brandPrimary};
  }
`;

export const StyledFormBtn = styled(motion.button)`
  height: 4rem;
  margin: 0 3rem 1rem 3rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 1rem;
  border: ${({ outline, theme }) =>
    outline ? `1px solid ${theme.colors.gray700}` : 'none'};
  background-color: ${({ outline, theme }) =>
    outline ? theme.colors.cultured : theme.colors.brandPrimary};

  color: ${({ textcolor, theme }) =>
    textcolor === 'light' ? theme.colors.cultured : theme.colors.gray700};
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  text-shadow: ${({ textcolor }) =>
    textcolor === 'light' ? '0.5px 0.5px 3px rgba(0, 0, 0, 0.4)' : ''};
  cursor: pointer;
`;

export const StyledDynamicIcon = styled(motion.div)`
  display: grid;
  place-items: center;

  svg {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const StyledStaticIcon = styled.div`
  display: grid;
  place-items: center;

  svg {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const StyledDivider = styled.p`
  display: grid;
  place-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray400};
`;
