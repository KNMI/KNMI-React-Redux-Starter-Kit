import React from 'react';
import AppContainer from './AppContainer';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

describe('(Component) AppContainer', () => {
  let _component;
  beforeEach(() => {
    _component = shallow(<AppContainer routes={{}} store={{ subscribe: () => {} }} />);
  });

  it('Can mount', () => {
    expect(_component.type()).to.equal(Provider);
  });
});
