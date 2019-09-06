import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
class AppContainer extends Component {
  render () {
    const { routes, store } = this.props;
    return (
      <Provider store={store}>
        <div style={{ height: 'inherit' }}>
          <BrowserRouter children={routes} />
        </div>
      </Provider>
    );
  }
}

AppContainer.propTypes = {
  routes : PropTypes.object.isRequired,
  store  : PropTypes.object.isRequired
};

export default hot(module)(AppContainer);
