import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  border-radius: 30%;
  /* background-color: ${({ theme }) => theme.colors.gray800}; */
  /* border: 1px solid ${({ theme }) => theme.colors.gray500}; */
  color: ${({ theme }) => theme.colors.cultured};
  /* box-shadow: ${({ theme }) => theme.shadow.lg}; */
  background: linear-gradient(145deg, #4a535f, #3e4650);
  box-shadow: 21px 21px 41px #282d34, -21px -21px 41px #626f7e;
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
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.brandPrimary};
  background-color: ${({ complete, theme }) =>
    complete ? theme.colors.brandPrimary : 'transparent'};
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-area: controls;
  width: 30%;
`;

export const ControlBtn = styled(motion.button)`
  font-size: 2rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  border: none;
  background-color: transparent;

  #play-pause {
    font-size: ${({ disabled }) => (disabled ? '2rem' : '3.5rem')};
    border: 1px solid;
    border-color: transparent;
    border-radius: 50%;
  }
`;
