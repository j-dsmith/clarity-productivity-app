import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledStatsContainer = styled.section`
  padding: 1rem;
  margin: 0 0.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray800};

  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    'head head . . '
    'decks decks tproj tproj'
    'decks decks tproj tproj'
    'pom pom ctasks ctasks '
    'pom pom ctasks ctasks ';
`;

export const StyledTileGroup = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const StyledStatTile = styled(motion.div)`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray700};
  grid-area: ${({ gridarea }) => gridarea};
  box-shadow: ${({ theme }) => theme.shadow.xl};
  border-radius: 1.5rem;

  p {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 0.95rem;
  }

  h4 {
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
    color: ${({ color }) => color};
  }
`;

export const StyledStatsHeader = styled.div`
  grid-area: head;
  h3 {
    margin: 0;
    padding: 1rem;
    font-size: 1.5rem;
  }
`;
