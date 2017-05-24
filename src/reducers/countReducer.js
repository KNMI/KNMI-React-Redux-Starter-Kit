import { INCREMENT_COUNT, DOUBLE_COUNT, RESET_COUNTER } from '../constants/countLabels';

const incrementCount = (state) => {
  return Object.assign({}, state, { count: state.count + 1 });
};

const doubleCount = (state) => {
  return Object.assign({}, state, { count: state.count * 2 });
};

const resetCounter = (state) => {
  return { count: 0 };
};

const ACTION_HANDLERS = {
  [INCREMENT_COUNT] : (state) => incrementCount(state),
  [DOUBLE_COUNT]    : (state) => doubleCount(state),
  [RESET_COUNTER]   : (state) => resetCounter(state)
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { count: 0 };
export default function countReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
