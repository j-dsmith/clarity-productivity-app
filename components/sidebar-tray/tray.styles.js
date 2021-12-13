import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TrayContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.gray700};
  width: 22%;
  min-height: 100vh;
  position: absolute;
  z-index: 1;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const TrayHeader = styled.div`
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

export const ContentList = styled.ul`
  list-style: none;
  margin: 2rem -1rem;
  padding: 0;
  margin-top: 2rem;
  position: relative;
`;
