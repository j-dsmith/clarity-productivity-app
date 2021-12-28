import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StatsContainer = styled.section`
  grid-area: stat;
  padding: 1.5em 1.5em 2em 1.5em;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-block: 1em;
`;

export const StyledStatTile = styled(motion.div)`
  display: grid;
  margin: 10%;
  place-items: center;
  margin-bottom: 1.5em;
  border-left: 2px solid ${({ theme }) => theme.colors.brandPrimary};

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
