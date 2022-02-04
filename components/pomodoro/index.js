// Dependencies
import { useEffect, useState, useReducer } from 'react';

//Style
import { MdPause, MdPlayArrow, MdRestartAlt } from 'react-icons/md';
import {
  PomodoroPage,
  TimerWrapper,
  Header,
  CurrentTimer,
  RoundCount,
  Round,
  PlayControls,
  ControlBtn,
  TimeAdjustmentsContainer,
} from './pomodoro.styles';

// Helpers
import {
  startTimer,
  pauseTimer,
  resetTimer,
  convertTimeValueToClock,
  cycleToBreak,
  cycleToSession,
} from './helpers';
import { reducer } from './reducer';
import { initialState } from './reducer';

// Components
import Confetti from 'react-confetti';
import { incrementPomodoroCycles } from '../../helpers/pomodoro';
import DurationControl from './duration-control';

const Pomodoro = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [confettiDimensions, setConfettiDimensions] = useState({
    height: 0,
    width: 0,
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const controlBtn = {
    rest: {
      color: 'hsl(20, 33%, 98%)',
    },
    hover: {
      scale: 1.06,
      transition: { duration: 0.15, ease: 'linear' },
      color: 'hsl(222, 100%, 61%)',
    },
  };

  useEffect(() => {
    setConfettiDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  useEffect(() => {
    if (state.roundsComplete === 4) {
      setShowConfetti(true);
      pauseTimer(state, dispatch);
      incrementPomodoroCycles();
    }
  }, [state.roundsComplete]);

  useEffect(() => {
    if (state.timerValue === 0) {
      clearInterval(state.timerId);

      // Check if cycle is complete to increase completed rounds by 1

      if (state.timerType === 'session') {
        // If session, toggle timer to break
        cycleToBreak(state, dispatch);
        // Start new timer
        startTimer(state, dispatch);
      } else {
        cycleToSession(state, dispatch);
        startTimer(state, dispatch);
      }
    }
  }, [state.timerValue]);

  console.log(state.timerValue);

  return (
    <PomodoroPage>
      {showConfetti && (
        <Confetti
          width={confettiDimensions.width}
          height={confettiDimensions.height}
          colors={[
            'hsl(222, 100%, 61%)',
            'hsl(20, 33%, 98%)',
            'hsl(240, 14%, 1%)',
          ]}
        />
      )}

      <TimerWrapper>
        <h2>Pomodoro Study Timer</h2>

        <CurrentTimer>
          <Header>{state.timerType}</Header>
          <p id="timer-value">{convertTimeValueToClock(state.timerValue)}</p>
          <PlayControls>
            <ControlBtn
              style={{
                '--size': '4.5rem',
                '--bg-color': 'var(--component-bg-light)',
              }}
              variants={state.roundsComplete === 4 ? '' : controlBtn}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 1.1 }}
              disabled={state.roundsComplete === 4 ? true : false}
            >
              {state.timerActive ? (
                <MdPause
                  id="play-pause"
                  className="control"
                  onClick={() => pauseTimer(state, dispatch)}
                  style={{ '--svg-size': '2.5rem' }}
                />
              ) : (
                <MdPlayArrow
                  id="play-pause"
                  className="control"
                  onClick={() => startTimer(state, dispatch)}
                  style={{ '--svg-size': '3rem' }}
                />
              )}
            </ControlBtn>
            <ControlBtn
              style={{
                '--size': '4.5rem',
                '--bg-color': 'var(--component-bg-light)',
              }}
              variants={controlBtn}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 1 }}
            >
              <MdRestartAlt
                className="control"
                onClick={() => resetTimer(state, dispatch, setShowConfetti)}
                style={{ '--svg-size': '2.5rem' }}
              />
            </ControlBtn>
          </PlayControls>
        </CurrentTimer>
        <RoundCount>
          <Round complete={state.roundsComplete >= 1 ? true : false} />
          <Round complete={state.roundsComplete >= 2 ? true : false} />
          <Round complete={state.roundsComplete >= 3 ? true : false} />
          <Round complete={state.roundsComplete >= 4 ? true : false} />
        </RoundCount>
        <TimeAdjustmentsContainer>
          <DurationControl
            title="Break Length"
            state={state}
            dispatch={dispatch}
            durationValue={state.breakValue}
            timerType="break"
          />
          <DurationControl
            title="Session Length"
            state={state}
            dispatch={dispatch}
            durationValue={state.sessionValue}
            timerType="session"
          />
        </TimeAdjustmentsContainer>
      </TimerWrapper>
    </PomodoroPage>
  );
};

export default Pomodoro;
