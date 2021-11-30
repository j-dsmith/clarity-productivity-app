import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSidebar = styled.nav`
  height: 100vh;
  min-height: 100vh;
  width: 8%;
  background-color: ${({ theme }) => theme.colors.gray800};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const SidebarItemList = styled.ul`
  margin: 0;
  padding: 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
`;

export const StyledIcon = styled(motion.div)`
  margin: 0.5rem;
  padding: 0.75rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.cultured};
  background-color: ${({ theme }) => theme.colors.gray700};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  cursor: pointer;
  transition: all 150ms linear;

  &:hover {
    color: ${({ color }) => color};
    border-radius: 1.5rem;
  }

  svg {
    height: 3rem;
    width: 3rem;
  }
`;
