import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const TrayContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.gray700};
  width: 22%;
  min-height: 100vh;
  height: 100vh;
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
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.gray700};

  h2 {
    padding: 0;
    margin: 0 1rem 0 0;
  }
`;

export const ProjectsLink = styled.div`
  color: ${({ theme }) => theme.colors.brandPrimary};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 1em;
  padding: 0.25em;
  border-radius: 0.5em;
`;

export const ContentList = styled.div`
  margin-inline: -1rem;
  overflow-y: scroll;

  height: 100%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
