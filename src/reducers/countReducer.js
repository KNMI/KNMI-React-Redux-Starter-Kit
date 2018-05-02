import { createAction, handleActions } from 'redux-actions';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DOUBLE_COUNT = 'DOUBLE_COUNT';

const initialState = {
  count: 0
};

const incrementCounter = createAction(INCREMENT_COUNT);
const doubleCounter = createAction(DOUBLE_COUNT);

export const actions = {
  incrementCounter,
  doubleCounter
};

export default handleActions({
  [INCREMENT_COUNT]: (state) => Object.assign({}, state, { count: state.count + 1 }),
  [DOUBLE_COUNT]: (state) => Object.assign({}, state, { count: state.count * 2 })
}, initialState);
