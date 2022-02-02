import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSidebar = styled.nav`
  height: 100vh;
  min-height: 100vh;
  width: min(8vw, 8rem);
  background-color: var(--page-bg-light);
  border-right: 1px solid var(--color-gray-200);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const SidebarItemList = styled.ul`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
`;

export const StyledIcon = styled.div`
  margin: 0.5rem;
  padding: 0.75em;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: ${({ active }) =>
    active ? 'var(--color-blue)' : 'var(--color-gray-800)'};
  background-color: var(--component-bg-light);
  border: ${({ active }) =>
    active ? 'none' : '1px solid var(--color-gray-400)'};
  box-shadow: ${({ active }) => (active ? 'var(--shadow-md)' : '')};
  transform: ${({ active }) => (active ? 'scale(1.06)' : '')};
  cursor: pointer;
  transition: all 150ms linear;

  &:hover {
    color: var(--color);
    transform: scale(1.06);
    box-shadow: var(--shadow-md);
    border: none;

    /* background-color: ${({ btntype, theme }) =>
      btntype === 'logout' ? theme.colors.gray900 : theme.colors.gray700}; */
  }

  svg {
    font-size: calc(2.5rem + 0.5vw);
    filter: drop-shadow(var(--shadow-sm));
  }
`;
