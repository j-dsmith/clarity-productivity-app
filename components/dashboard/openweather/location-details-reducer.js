const initialState = {
  name: {},
  current: {},
  hourly: {},
};

const actionTypes = {
  UPDATE_FORECAST: 'UPDATE_FORECAST',
};

function locationDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_FORECAST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default locationDetailsReducer;
export { initialState, actionTypes };
