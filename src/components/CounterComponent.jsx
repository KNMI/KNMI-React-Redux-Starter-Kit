import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CounterComponent extends Component {
  render () {
    const { count, dispatch, actions } = this.props;
    return (
      <div>
        {count}
        <button id='incrementButton' onClick={() => dispatch(actions.incrementCounter())}>Increment</button>
        <button id='doubleButton' onClick={() => dispatch(actions.doubleCounter())}>Double</button>
      </div>);
  }
}

CounterComponent.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};
