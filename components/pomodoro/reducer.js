// Helpers
import { actionTypes } from './action-types';

export const initialState = {
  sessionValue: 25,
  breakValue: 5,
  timerValue: 10,
  timerId: null,
  timerActive: false,
  timerType: 'session',
  roundsComplete: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
