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
const initialState = { location: null };
export default handleActions({
  [locationChange]: (state, { payload }) => ({ ...state, location: payload })
}, initialState);
