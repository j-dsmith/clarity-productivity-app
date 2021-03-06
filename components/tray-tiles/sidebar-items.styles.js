import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectTileContainer = styled.div`
  background-color: var(--color-gray-400);
  color: var(--text-dark);
  padding: 1em;
  cursor: pointer;
  transition: all 150ms linear;
  border-radius: 1rem;
  margin-bottom: 0.5em;

  &:hover {
    box-shadow: var(--shadow-sm);
    transform: scale(1.02) translateY(-2px);
  }
`;

export const NoteTileContainer = styled(ProjectTileContainer)``;

export const TileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  /* padding: 0.75em; */

  h3 {
    margin: 0 0.5em 0 0;
    padding: 0;
    text-shadow: var(--shadow-sm);
  }
`;

export const Tag = styled(motion.div)`
  // Tag Container
  padding: 0.5rem;
  cursor: pointer;
  position: relative;

  // Inner circle tag
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
`;

export const TileFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Date = styled.div`
  font-size: 0.85rem;
  span {
    font-style: italic;
    color: var(--color-gray-800);
  }
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  color: var(--color);

  span {
    margin-right: 0.25rem;
  }

  svg {
    font-size: 1.5rem;
    filter: drop-shadow(var(--shadow-sm));
  }
`;
