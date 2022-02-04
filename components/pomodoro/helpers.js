import { actionTypes } from './action-types';

export const startTimer = (state, dispatch) => {
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

export const pauseTimer = (state, dispatch) => {
  // Clear interval to pause timer
  clearInterval(state.timerId);
  dispatch({
    ...state,
    type: actionTypes.SET_TIMER_ACTIVE,
    timerActive: false,
  });
};

export const resetTimer = (state, dispatch, setShowConfetti) => {
  if (state.timerId) {
    clearInterval(state.timerId);
  }
  dispatch({
    type: actionTypes.RESET_TIMER,
  });
  setShowConfetti(false);
};

export const incrementValue = (state, dispatch, timerType) => {
  if (timerType === 'break') {
    dispatch({
      ...state,
      type: actionTypes.INCREMENT_BREAK_VALUE,
    });
  }
  if (timerType === 'session') {
    dispatch({
      ...state,
      type: actionTypes.INCREMENT_SESSION_VALUE,
    });
  }
};
export const decrementValue = (state, dispatch, timerType) => {
  if (timerType === 'break') {
    console.log('in decrement for break timer');
    dispatch({
      ...state,
      type: actionTypes.DECREMENT_BREAK_VALUE,
    });
  }
  if (timerType === 'session') {
    console.log('in decrement for session timer');

    dispatch({
      ...state,
      type: actionTypes.DECREMENT_SESSION_VALUE,
    });
  }
};

export const convertTimeValueToClock = (timerValue) => {
  let minutes = Math.floor(timerValue / 60);
  let seconds = timerValue - minutes * 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return `${minutes}:${seconds}`;
};

export const cycleToBreak = (state, dispatch) => {
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

export const cycleToSession = (state, dispatch) => {
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

export const skipCycle = (state, dispatch) => {
  if (state.timerType === 'break') {
    cycleToSession(state, dispatch);
  } else {
    cycleToBreak(state, dispatch);
  }
};
