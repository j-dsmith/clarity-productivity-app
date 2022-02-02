import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StatsContainer = styled.section`
  grid-area: stats;
  padding: 1.5em;

  background-color: var(--component-bg-light);
  color: var(--text-dark);
  border-radius: 1.5rem;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const TileContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2em;
  flex: 2;
`;

export const StyledStatTile = styled(motion.div)`
  display: grid;
  place-items: center;
  border-left: 2px solid var(--color-blue);

  height: 80%;

  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  h4 {
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
  }
`;

export const StatsHeader = styled.div`
  h2 {
    margin: 0;
  }
`;
