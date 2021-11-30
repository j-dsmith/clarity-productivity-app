import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTray = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.gray700};
  width: 22%;
  height: 100vh;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  padding: 1rem;
`;

export const StyledTrayHeader = styled.div`
  color: ${({ theme }) => theme.colors.cultured};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.gray700};

  h2 {
    padding: 0;
    margin: 0 1rem 0 0;
  }

  svg {
    color: ${({ theme }) => theme.colors.gray100};
    cursor: pointer;
  }
`;

export const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const StyledBtn = styled.div`
  display: grid;
  place-items: center;
  padding: 0.25rem;
  margin: 0 0.25rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 1px solid ${({ color }) => color};
  color: ${({ theme }) => theme.colors.cultured};
  transition: all 100ms linear;
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => color};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  svg {
    height: 1rem;
    width: 1rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.85rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.cultured};
  box-shadow: ${({ theme }) => theme.shadow.md};

  &:focus {
    outline: none;
  }
`;

export const StyledContentSection = styled.ul`
  list-style: none;
  margin: 2rem -1rem;
  padding: 0;
  margin-top: 2rem;
`;
