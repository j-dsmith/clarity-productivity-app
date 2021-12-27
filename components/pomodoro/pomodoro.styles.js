import styled from 'styled-components';

export const PomodoroPage = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  position: absolute;
  display: grid;
  place-items: center;
`;

export const TimerContainer = styled.div`
  height: 40em;
  width: 40em;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr);
  grid-template-areas:
    '.'
    '.'
    'header'
    'timer'
    'rounds'
    'controls'
    '.';
  place-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.brandPrimary};
  color: ${({ theme }) => theme.colors.cultured};
  box-shadow: ${({ theme }) => theme.shadow.lg};
`;

export const CurrentTimer = styled.h2`
  font-size: 9rem;
  margin: 0;
  font-weight: 500;
  grid-area: timer;
`;

export const Header = styled.h3`
  text-transform: capitalize;
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  grid-area: header;
`;

export const RoundCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  grid-area: rounds;
`;

export const Round = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.cultured};
  background-color: ${({ complete, theme }) =>
    complete ? theme.colors.cultured : 'transparent'};
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-area: controls;
  width: 30%;

  .control {
    font-size: 2rem;
    cursor: pointer;
  }

  #play-pause {
    font-size: 4rem;
    border: 1px solid white;
    border-radius: 50%;
  }
`;
