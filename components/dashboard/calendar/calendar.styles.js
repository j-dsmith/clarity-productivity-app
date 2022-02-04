import styled from 'styled-components';

export const CalendarContainer = styled.section`
  grid-area: calendar;
  background-color: var(--component-bg-light);
  color: var(--color-text-dark);
  border-radius: 1.5rem;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1em;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  h2 {
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const CalendarGrid = styled.div`
  flex: 2;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-template-areas: 'mon tue wed thu fri sat sun';
`;

export const WeekdayHeader = styled.h3`
  text-align: center;
  display: grid;
  place-items: center;
  grid-column: 'mon';
  font-size: 0.95rem;
  margin: 0;
  padding: 0.5em;
  font-weight: 500;
  /* margin-block: 1em; */
`;

export const CalendarBtn = styled.button`
  background: var(--color-gray-400);
  height: 2.25rem;
  width: 2.25rem;
  grid-column: ${({ colStart }) => colStart + '/ span 1'};
  display: grid;
  place-items: center;
  color: var(--color-gray-800);
  border-radius: 50%;
  border: 1px solid var(--color-gray-600);
  cursor: pointer;
  transition: all 150ms linear;

  &:hover {
    box-shadow: var(--shadow-sm);
    transform: scale(1.06) translateY(-2px);
    color: var(--text-dark);
    border: 1px solid var(--color-gray-400);
  }

  svg {
    font-size: 1rem;
    filter: drop-shadow(var(--shadow-sm));
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
  font-size: 0.85rem;

  &.today {
    border-radius: 1rem;
    background-color: var(--color-blue);
    color: var(--text-light);
    box-shadow: var(--shadow-sm);
  }
`;

export const ExtraDay = styled(CalendarDay)`
  color: var(--color-gray-800);
`;
