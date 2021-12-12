import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GeneralTileContainer = styled.div`
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bluecrayola};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
`;

export const ProjectTileContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.cultured};
  padding: 1em;
  border-left: 2px solid ${({ theme }) => theme.colors.gray600};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray800};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray800};
    border-left: 2px solid
      ${({ theme, deleteactive }) =>
        deleteactive === 'true'
          ? theme.colors.bittersweet
          : theme.colors.bluecrayola};
  }
`;

export const NoteTileContainer = styled(ProjectTileContainer)``;

export const TileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-block: 0.25em;
  /* padding: 0.75em; */

  h3 {
    margin: 0 0.5em 0 0;
    padding: 0;
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
    color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const NotesCounter = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0;
  color: ${({ theme, deleteactive }) =>
    deleteactive === 'true' ? theme.colors.bittersweet : theme.colors.cultured};

  span {
    margin-right: 0.25rem;
  }

  svg {
    font-size: 1.25rem;
  }
`;
