import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StatsContainer = styled.section`
  grid-area: stat;
  padding: 1.5em;
  margin: 0.75em 1.5em 1.5em 0.75em;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  display: flex;
  flex-direction: column;
`;

export const TileContainer = styled.div`
  width: 100%;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const StyledStatTile = styled(motion.div)`
  padding: 1em;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5em;
  border-left: 2px solid ${({ color }) => color};

  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  h4 {
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
    color: ${({ color }) => color};
  }
`;

export const StatsHeader = styled.div`
  h2 {
    margin: 0;
    margin-bottom: 1em;
  }
`;
