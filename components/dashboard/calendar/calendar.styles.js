import styled from 'styled-components';

export const CalendarContainer = styled.section`
  grid-area: cal;
  padding: 1.5em;
  margin: 1.5em 0.75em 0.75em 1.5em;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1em;
  font-size: 1.5rem;

  h3 {
    padding: 0;
    margin: 0;
    text-align: center;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-template-areas: 'mon tue wed thu fri sat sun';
`;

export const WeekdayHeader = styled.h5`
  text-align: center;
  display: grid;
  place-items: center;
  grid-column: 'mon';
  font-size: 1rem;
  margin: 0;
  padding: 0.5em;
  /* margin-block: 1em; */
`;

export const CalendarBtn = styled.button`
  border: none;
  background: transparent;
  padding: 0.5em;
  grid-column: ${({ colStart }) => colStart + '/ span 1'};
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.cultured};

  border-radius: 0.75em;
  cursor: pointer;
  transform: ${({ rotate }) => (rotate === 'true' ? 'scaleX(-1)' : '')};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.xl};
    background-color: ${({ theme }) => theme.colors.gray500};
  }

  svg {
    font-size: 1rem;
  }
`;

export const CalendarDay = styled.p`
  grid-column: ${({ firstDay }) => firstDay};
  display: grid;
  place-items: center;
  grid-column: 'mon';
  text-align: center;
  margin: 0;
  height: 2em;
  width: 2em;

  &.today {
    border: 1px solid ${({ theme }) => theme.colors.brandPrimary};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.brandPrimary};
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
`;

export const ExtraDay = styled(CalendarDay)`
  color: ${({ theme }) => theme.colors.gray200};
`;
