import React from 'react';
import MainComponent from './MainComponent';
import { mount } from 'enzyme';
import sinon from 'sinon';

describe('(Component) MainComponent', () => {
  let _component;
  const _dispatch = sinon.spy();
  const incrementFunc = sinon.spy();
  const _actions = {
    incrementCounter: incrementFunc
  };
  beforeEach(() => {
    _component = mount(<MainComponent count={0} dispatch={_dispatch} actions={_actions} />);
  });

  it('Can mount', () => {
    expect(_component.type()).to.equal(MainComponent);
    expect(_component.html()).to.equal('<div>hi!</div>');
  });
});
