import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledUIBtn = styled.button`
  display: grid;
  place-items: center;
  font-size: ${({ btnLg }) => (btnLg ? '1.5rem' : '1.25rem')};
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  background-color: var(--color-gray-400);
  border: 1px solid var(--color-gray-600);
  color: var(--color-gray-800);
  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    color: var(--color);
    box-shadow: var(--shadow-sm);
    transform: scale(1.06) translateY(-2px);
    border: 1px solid var(--color-gray-400);
  }

  &:disabled {
    background-color: var(--color-gray-600);
    color: var(--color-gray-800);
    border: 1px solid var(--color-gray-600);
  }

  &:disabled:hover {
    transform: scale(1);
    box-shadow: none;
  }

  svg {
    filter: drop-shadow(var(--shadow-sm));
  }
`;

export const StyledSaveBtn = styled.button`
  height: 2rem;
  width: 2rem;
  font-size: 1.25rem;
  color: var(--text-light);
  background-color: ${({ saving }) =>
    saving ? 'var(--color-gray-800)' : 'var(--color-blue)'};
  border: none;
  box-shadow: ${({ saving }) =>
    saving
      ? '0px 1px 1px hsl(220deg 60% 50% / 0.333), 0px 2px 2px hsl(220deg 60% 50% / 0.333), 0px 4px 4px hsl(220deg 60% 50% / 0.333)'
      : '0.5px 1px 1px hsl(220deg 60% 50% / 0.7)'};
  border-radius: 50%;
  cursor: pointer;
  transition: all 150ms linear;
  display: grid;
  place-items: center;

  &:hover {
    box-shadow: 0px 1px 1px hsl(220deg 60% 50% / 0.333),
      0px 2px 2px hsl(220deg 60% 50% / 0.333),
      0px 4px 4px hsl(220deg 60% 50% / 0.333);
    transform: scale(1.06);
  }

  svg {
    filter: drop-shadow(0.5px 1px 1px hsl(220deg 60% 50% / 0.7));
  }
`;

export const StyledDeleteBtn = styled.button`
  display: grid;
  place-items: center;
  background-color: var(--color-gray-400);
  color: var(--color);
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  border: 1px solid var(--color-gray-600);
  font-size: 1.25rem;
  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    color: var(--color-red);
    box-shadow: var(--shadow-sm);
    transform: scale(1.06) translateY(-2px);
    border: 1px solid var(--color-gray-400);
  }

  &.active {
    transform: scale(1.06) translateY(-2px);
    color: var(--color-red);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--color-gray-400);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: ${({ width }) => width};
`;

export const TextInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.75rem;
  border: none;
  padding: 1em;
  font-size: 0.875rem;
  background-color: var(--color-gray-400);
  color: var(--text-dark);
  box-shadow: var(--shadow-sm);

  &:focus {
    border: 2px solid var(--color-blue);
    outline: hsla(222 100% 61% / 1);
  }
`;

export const SpinnerContainer = styled.div`
  flex-basis: 100%;

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
  background-color: var(--component-bg-light);
  width: 20rem;
  border-radius: 1.5rem;
  padding: 0.5em;

  left: 25%;
  top: 22.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-dark);
  font-size: 2rem;
  box-shadow: var(--shadow-md);
  text-shadow: var(--shadow-sm);

  p {
    padding: 0;
    margin: 0;
    margin-left: 0.5em;
  }

  span {
    color: var(--color-blue);
  }

  svg {
    font-size: 3rem;
  }
`;
