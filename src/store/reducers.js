import { combineReducers } from 'redux';
import locationReducer from '../reducers/location';
import countReducer from '../reducers/countReducer';
export const makeRootReducer = () => {
  return combineReducers({
    location: locationReducer,
    countState: countReducer
  });
};
export default makeRootReducer;
