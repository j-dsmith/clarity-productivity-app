import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTray = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.gray700};
  width: 17%;
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
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  h2 {
    padding: 0;
    margin: 0;
  }
`;

export const StyledBtnGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledBtn = styled.div`
  display: grid;
  place-items: center;
  margin: 0 0.25rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 1px solid ${({ color }) => color};
  color: ${({ theme }) => theme.colors.cultured};

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => color};
  }

  svg {
    height: 1rem;
    width: 1rem;
  }
`;
