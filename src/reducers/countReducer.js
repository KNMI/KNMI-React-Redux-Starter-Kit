import { createActions, handleActions } from 'redux-actions';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DOUBLE_COUNT = 'DOUBLE_COUNT';

const initialState = {
  count: 0
};
const { incrementCount, doubleCount } = createActions(INCREMENT_COUNT, DOUBLE_COUNT);

export const actions = {
  incrementCount,
  doubleCount
};

export default handleActions({
  [incrementCount]: state => ({ ...state, count: state.count + 1 }),
  [doubleCount]: state => ({ ...state, count: state.count * 2 })
}, initialState);
