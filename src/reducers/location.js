import { createAction, handleActions } from 'redux-actions';
// ------------------------------------
// Constants
// ------------------------------------
const LOCATION_CHANGE = 'LOCATION_CHANGE';

// ------------------------------------
// Actions
// ------------------------------------
export const locationChange = createAction(LOCATION_CHANGE);

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation));
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null;
export default handleActions({
  [LOCATION_CHANGE]: (state, { payload }) => Object.assign({}, state, payload)
}, initialState);
