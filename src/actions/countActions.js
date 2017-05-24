// This is where action creators are put
import { INCREMENT_COUNT, DOUBLE_COUNT } from '../constants/countLabels';

const incrementCounter = () => {
  return {
    type: INCREMENT_COUNT
  };
};

/* istanbul ignore next */
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

const actions = {
  doubleCounter,
  incrementCounter
};

export default actions;
