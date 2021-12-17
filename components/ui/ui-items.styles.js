import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledUIBtn = styled.button`
  display: grid;
  place-items: center;
  font-size: ${({ btnLg }) => (btnLg ? '1.5rem' : '1.25rem')};
  padding: 0.25em;
  margin: 0 0.25em;
  border-radius: 0.5em;
  background-color: ${({ color, outline }) =>
    outline ? 'transparent' : color};
  border: 1px solid ${({ color }) => color};
  color: ${({ theme }) => theme.colors.cultured};
  transition: all 100ms linear;
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => color};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray400};
    border: 1px solid ${({ theme }) => theme.colors.gray400};
  }

  &:disabled&:hover {
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const UIBtnOutline = styled(StyledUIBtn)`
  background-color: transparent;
`;

export const StyledSaveBtn = styled.button`
  margin-left: auto;
  /* padding: 0.25em; */
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.cultured};
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 20%;
  cursor: pointer;
  transition: all 100ms ease-in-out;

  &:hover {
    box-shadow: ${({ theme, saving }) => (saving ? 'none' : theme.shadow.xl)};
    background-color: ${({ theme, saving }) =>
      saving ? 'transparent' : theme.colors.gray800};
    border: 1px solid
      ${({ theme, saving }) => (saving ? 'none' : theme.colors.gray600)};
  }
`;

export const StyledDeleteBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.bittersweet};
  color: ${({ theme }) => theme.colors.cultured};
  font-size: 0.875rem;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.75em;
  cursor: pointer;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
  width: ${({ width }) => width};
`;

export const TextInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5em;
  margin-right: 0.5em;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  color: ${({ theme }) => theme.colors.cultured};
  box-shadow: ${({ theme }) => theme.shadow.lg};

  &:focus {
    outline: none;
  }
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 100%;
  margin-block: auto;
  display: grid;
  place-items: center;
`;

export const SpinnerPage = styled.div`
  width: 78%;
  height: clamp(100vh, 100vh, 100vh);
  position: absolute;
  right: 0;
  top: 0;
  display: grid;
  place-items: center;
`;
export const BannerContainer = styled(motion.div)`
  position: absolute;
  left: 25%;
  top: 22.5%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.cultured};
  font-size: 2rem;

  p {
    padding: 0;
    margin: 0;
    margin-left: 0.5em;
    height: 3rem;
  }

  span {
    color: ${({ theme }) => theme.colors.brandPrimary};
  }

  svg {
    font-size: 3rem;
  }
`;

export const ArrowContainer = styled(motion.div)``;
