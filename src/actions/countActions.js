// This is where action creators are put
import { INCREMENT_COUNT, DOUBLE_COUNT, RESET_COUNTER } from '../constants/countLabels';

const incrementCounter = () => {
  return {
    type: INCREMENT_COUNT
  };
};

const doubleCounter = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : DOUBLE_COUNT
        });
        resolve();
      }, 200);
    });
  };
};

const resetCounter = () => {
  return {
    type: RESET_COUNTER
  };
};

const actions = {
  doubleCounter,
  incrementCounter,
  resetCounter
};

export default actions;
