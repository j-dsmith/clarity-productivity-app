import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTile = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.cultured};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  box-sizing: border-box;
  border-left: 2px solid ${({ theme }) => theme.colors.gray600};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray800};
  transition: all 100ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray800};
    border-left: 2px solid ${({ theme }) => theme.colors.bluecrayola};
  }

  /* &::before:hover {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.bluecrayola};
  } */
`;

export const StyledTileHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h3 {
    margin: 0 0.5rem 0 0;
    padding: 0;
  }
`;

export const StyledTag = styled(motion.div)`
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

export const StyledTileFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledDate = styled.div`
  font-size: 0.85rem;
  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const StyledNotesCounter = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 0.25rem;
  }
`;
