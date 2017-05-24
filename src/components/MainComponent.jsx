import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MainComponent extends Component {
  render () {
    return (
      <div>
        hi!
      </div>);
  }
}

MainComponent.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};
