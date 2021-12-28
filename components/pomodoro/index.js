// Dependencies
import { useEffect, useState, useReducer } from 'react';

//Style
import {
  MdOutlineSkipNext,
  MdPause,
  MdPlayArrow,
  MdRestartAlt,
} from 'react-icons/md';
import {
  PomodoroPage,
  TimerContainer,
  Header,
  CurrentTimer,
  RoundCount,
  Round,
  Controls,
  ControlBtn,
} from './pomodoro.styles';

// Helpers
import {
  startTimer,
  pauseTimer,
  resetTimer,
  convertTimeValueToClock,
  cycleToBreak,
  cycleToSession,
  skipCycle,
} from './helpers';
import { reducer } from './reducer';
import { initialState } from './reducer';

// Components
import Confetti from 'react-confetti';
import { incrementPomodoroCycles } from '../../helpers/pomodoro';

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
      scale: 1.2,
      transition: { duration: 0.1, ease: 'easeInOut' },
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

      <TimerContainer>
        <Header>{state.timerType}</Header>
        <CurrentTimer>{convertTimeValueToClock(state.timerValue)}</CurrentTimer>
        <RoundCount>
          {/* Set this to render using map */}
          <Round complete={state.roundsComplete >= 1 ? true : false} />
          <Round complete={state.roundsComplete >= 2 ? true : false} />
          <Round complete={state.roundsComplete >= 3 ? true : false} />
          <Round complete={state.roundsComplete >= 4 ? true : false} />
        </RoundCount>
        <Controls>
          <ControlBtn
            variants={controlBtn}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 1 }}
          >
            <MdRestartAlt
              className="control"
              onClick={() => resetTimer(state, dispatch, setShowConfetti)}
            />
          </ControlBtn>

          <ControlBtn
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
              />
            ) : (
              <MdPlayArrow
                id="play-pause"
                className="control"
                onClick={() => startTimer(state, dispatch)}
              />
            )}
          </ControlBtn>
          <ControlBtn
            variants={state.roundsComplete === 4 ? '' : controlBtn}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 1.1 }}
            disabled={state.roundsComplete === 4 ? true : false}
          >
            <MdOutlineSkipNext
              className="control"
              onClick={() => skipCycle(state, dispatch)}
            />
          </ControlBtn>
        </Controls>
      </TimerContainer>
    </PomodoroPage>
  );
};

export default Pomodoro;
