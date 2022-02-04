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

export const TimerWrapper = styled.div`
  height: 40em;
  width: 40em;
  padding: 1em;
  background-color: var(--component-bg-light);
  border-radius: 2rem;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin: 0;
    margin-top: 0.5em;
  }
`;

export const CurrentTimer = styled.div`
  font-size: 5rem;
  height: 18rem;
  width: 18rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blue);
  color: var(--text-light);
  position: relative;
  box-shadow: var(--shadow-sm);

  #timer-value {
    text-shadow: 1px 2px 2px hsl(220 60% 50% / 0.333),
      2px 4px 4px hsl(220 60% 50% / 0.333), 3px 6px 6px hsl(220 60% 50% / 0.333);
    font-weight: 300;
  }
`;

export const Header = styled.h3`
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const RoundCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  margin-top: 1rem;
`;

export const Round = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  border: 2px solid var(--color-blue);
  background-color: ${({ complete }) =>
    complete ? 'var(--color-blue)' : 'transparent'};
  filter: drop-shadow(var(--shadow-sm));
`;

export const PlayControls = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  gap: 1rem;
`;

export const ControlBtn = styled(motion.button)`
  font-size: var(--font-size);
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
  background-color: var(--bg-color);
  box-shadow: 0.5px 1px 1px hsl(220deg 60% 50% / 0.7);
  cursor: pointer;
  display: grid;
  place-items: center;
  border: none;
  transition: all 150ms linear;

  &:hover {
    box-shadow: 1px 2px 2px hsl(220 60% 60% / 0.333),
      2px 4px 4px hsl(220 60% 60% / 0.333), 3px 6px 6px hsl(220 60% 60% / 0.333);
  }

  &.increment-decrement {
    background-color: var(--color-gray-200);
    border: 1px solid var(--color-gray-600);
    box-shadow: none;
    transition: all 150ms linear;

    &:hover {
      box-shadow: var(--shadow-md);
      border: 1px solid var(--color-gray-200);
      transform: scale(1.06) translateY(-2px);
    }

    &.disabled {
      font-size: 2rem;
      height: var(--size);
      width: var(--size);
      background-color: transparent;
      display: grid;
      place-items: center;
      border: none;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }

      svg {
        color: var(--color-gray-800);
      }
    }
  }

  &.disabled {
    font-size: 2rem;
    height: var(--size);
    width: var(--size);
    background-color: transparent;
    display: grid;
    place-items: center;
    border: none;
    box-shadow: none;

    &:hover {
      box-shadow: none;
      transform: scale(1);
    }

    svg {
      color: var(--color-gray-800);
    }
  }

  svg {
    color: var(--color-blue);
    filter: drop-shadow(var(--shadow-sm));
    width: var(--svg-size);
    height: var(--svg-size);
  }
`;

export const TimeAdjustmentsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const DurationControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-size: 1rem;
  }

  #increment-btn-group {
    display: flex;
    align-items: center;
    gap: 2rem;

    p#timer-duration {
      font-size: 2rem;
      font-weight: 300;
      margin: 0;
      color: var(--color-blue);
      text-shadow: var(--shadow-sm);

      &.disabled {
        color: var(--color-gray-800);
      }
    }
  }
`;
