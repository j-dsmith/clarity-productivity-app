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
} from './pomodoro.styles';

// Helpers
import { actionTypes } from './action-types';
import { reducer } from './reducer';
import { initialState } from './reducer';

const Pomodoro = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startTimer = () => {
    // Set timer active state
    dispatch({
      ...state,
      type: actionTypes.SET_TIMER_ACTIVE,
      timerActive: true,
    });

    // Start timer interval
    let timerInterval = setInterval(() => {
      // Dispatch action to update timer value
      dispatch({
        ...state,
        type: actionTypes.UPDATE_TIMER,
      });
    }, 1000);

    // Assign interval id
    dispatch({
      ...state,
      type: actionTypes.SET_TIMER_ID,
      timerId: timerInterval,
    });
  };

  const pauseTimer = () => {
    // Clear interval to pause timer
    clearInterval(state.timerId);
    dispatch({
      ...state,
      type: actionTypes.SET_TIMER_ACTIVE,
      timerActive: false,
    });
  };

  const resetTimer = () => {
    if (state.timerId) {
      clearInterval(state.timerId);
    }
    dispatch({
      type: actionTypes.RESET_TIMER,
    });
  };

  const convertTimeValueToClock = (timerValue) => {
    let minutes = Math.floor(timerValue / 60);
    let seconds = timerValue - minutes * 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${seconds}`;
  };

  const cycleToBreak = () => {
    dispatch({
      ...state,
      type: actionTypes.INCREMENT_SESSIONS_COMPLETE,
    });

    dispatch({
      ...state,
      type: actionTypes.SET_TIMER_TYPE,
      timerType: 'break',
    });
    dispatch({
      ...state,
      type: actionTypes.SET_TIMER_VALUE,
      timerValue: state.breakValue * 60,
    });
  };

  const cycleToSession = () => {
    dispatch({
      ...state,
      type: actionTypes.INCREMENT_BREAKS_COMPLETE,
    });
    // If break, toggle timer to session
    dispatch({
      ...state,
      type: actionTypes.SET_TIMER_TYPE,
      timerType: 'session',
    });
    dispatch({
      ...state,
      type: actionTypes.SET_TIMER_VALUE,
      timerValue: state.sessionValue * 60,
    });
  };

  useEffect(() => {
    if (state.timerValue === 0) {
      clearInterval(state.timerId);

      // Check if cycle is complete to increase completed rounds by 1

      if (state.timerType === 'session') {
        // If session, toggle timer to break
        cycleToBreak();
        // Start new timer
        startTimer();
      } else {
        cycleToSession();
        startTimer();
      }
    }
  }, [state.timerValue]);

  return (
    <PomodoroPage>
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
          <MdRestartAlt className="control" onClick={resetTimer} />
          {state.timerActive ? (
            <MdPause id="play-pause" className="control" onClick={pauseTimer} />
          ) : (
            <MdPlayArrow
              id="play-pause"
              className="control"
              onClick={startTimer}
            />
          )}
          <MdOutlineSkipNext className="control" />
        </Controls>
      </TimerContainer>
    </PomodoroPage>
  );
};

export default Pomodoro;
