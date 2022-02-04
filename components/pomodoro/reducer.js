// Helpers
import { actionTypes } from './action-types';

export const initialState = {
  sessionValue: 25,
  breakValue: 5,
  timerValue: 1500,
  timerId: null,
  timerActive: false,
  timerType: 'session',
  roundsComplete: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_BREAK_VALUE:
      return {
        ...state,
        breakValue: state.breakValue + 1,
        timerValue:
          state.timerType === 'break'
            ? state.breakValue * 60 + 60
            : state.timerValue,
      };

    case actionTypes.DECREMENT_BREAK_VALUE:
      if (state.breakValue <= 1) {
        return { ...state, breakValue: 1 };
      }
      return {
        ...state,
        breakValue: state.breakValue - 1,
        timerValue:
          state.timerType === 'break'
            ? state.breakValue * 60 - 60
            : state.timerValue,
      };

    case actionTypes.INCREMENT_SESSION_VALUE:
      return {
        ...state,
        sessionValue: state.sessionValue + 1,
        timerValue:
          state.timerType === 'session'
            ? state.sessionValue * 60 + 60
            : state.timerValue,
      };

    case actionTypes.DECREMENT_SESSION_VALUE:
      if (state.sessionValue <= 1) {
        return { ...state, sessionValue: 1 };
      }
      return {
        ...state,
        sessionValue: state.sessionValue - 1,
        timerValue:
          state.timerType === 'session'
            ? state.sessionValue * 60 - 60
            : state.timerValue,
      };

    case actionTypes.SET_TIMER_ACTIVE:
      return { ...state, timerActive: action.timerActive };

    case actionTypes.SET_TIMER_VALUE:
      return { ...state, timerValue: action.timerValue };

    case actionTypes.SET_TIMER_ID:
      return { ...state, timerId: action.timerId };

    case actionTypes.SET_TIMER_TYPE:
      return { ...state, timerType: action.timerType };

    case actionTypes.UPDATE_TIMER:
      return { ...state, timerValue: state.timerValue - 1 };

    case actionTypes.RESET_TIMER:
      return { ...initialState };

    case actionTypes.INCREMENT_SESSIONS_COMPLETE:
      return { ...state, roundsComplete: state.roundsComplete + 0.5 };

    case actionTypes.INCREMENT_BREAKS_COMPLETE:
      return { ...state, roundsComplete: state.roundsComplete + 0.5 };
  }
};
