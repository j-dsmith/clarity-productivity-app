import styled from 'styled-components';

export const StyledCalendarContainer = styled.section`
  padding: 1rem;
  margin: 0 0.5rem;
  height: 100%;
  flex: 2;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  display: grid;
  place-items: center;
  grid-template-columns: repeat(7, 14.28%);
  grid-template-rows: repeat(8, 12.25%);
  grid-template-areas: 'mon tue wed thu fri sat sun';

  h3 {
    padding: 0;
    margin: 0;
    grid-column: 3 / span 3;
    text-align: center;
    font-size: 1.5rem;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
  }
`;

export const StyledWeekday = styled.h5`
  text-align: center;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  grid-column: 'mon';
  font-size: 1rem;
`;

export const StyledCalendarBtn = styled.button`
  border: none;
  background: transparent;
  height: 2rem;
  width: 2rem;
  grid-column: ${({ colStart }) => colStart + '/ span 1'};
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.cultured};
  border: 1px solid ${({ theme }) => theme.colors.bittersweet};
  border-radius: 30%;
  transition: all 100ms linear;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bittersweet};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const StyledCalendarDay = styled.p`
  grid-column: ${({ firstDay }) => firstDay};
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  grid-column: 'mon';
  font-size: 1rem;
  text-align: center;
`;

export const StyledFirstDay = styled(StyledCalendarDay)`
  position: relative;
  z-index: 1;

  &::before {
    content: '1';
    display: grid;
    place-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.bittersweet};
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
`;

export const StyledExtraDay = styled(StyledCalendarDay)`
  color: ${({ theme }) => theme.colors.gray200};
`;
