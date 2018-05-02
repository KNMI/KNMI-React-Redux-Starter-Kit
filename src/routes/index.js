import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainComponent from '../components/MainComponent';
import CounterComponent from '../components/CounterComponent';
import { connect } from 'react-redux';
import { actions as countActions } from '../reducers/countReducer';
const mapStateToCounterProps = (state) => {
  return { ...state.countState };
};

const mapDispatchToCounterProps = function (dispatch) {
  return ({
    dispatch: dispatch,
    actions: countActions
  });
};
const createRoutes = (store) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={MainComponent} />
      <Route path='/counter' component={connect(mapStateToCounterProps, mapDispatchToCounterProps)(CounterComponent)} />
    </Switch>
  </BrowserRouter>
)

export default createRoutes;
