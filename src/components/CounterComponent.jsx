import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CounterComponent extends Component {
  render () {
    const { count, dispatch, actions } = this.props;
    return (
      <div>
        {count}
        <button onClick={() => dispatch(actions.incrementCounter())}>Increment</button>
        <button onClick={() => dispatch(actions.doubleCounter())}>Double</button>
        <button onClick={() => dispatch(actions.resetCounter())}>Reset</button>
      </div>);
  }
}

CounterComponent.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};
