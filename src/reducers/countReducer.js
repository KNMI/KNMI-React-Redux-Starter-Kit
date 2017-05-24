import { INCREMENT_COUNT, DOUBLE_COUNT } from '../constants/countLabels';

const incrementCount = (state) => {
  return Object.assign({}, state, { count: state.count + 1 });
};

const doubleCount = (state) => {
  return Object.assign({}, state, { count: state.count * 2 });
};

const ACTION_HANDLERS = {
  [INCREMENT_COUNT] : (state) => incrementCount(state),
  [DOUBLE_COUNT]    : (state) => doubleCount(state)
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { count: 0 };
export default function countReducer (state = initialState, action) {
  if (!action) {
    return state;
  }
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
