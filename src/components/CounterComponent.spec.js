import React from 'react';
import CounterComponent from './CounterComponent';
import { mount } from 'enzyme';
import sinon from 'sinon';

describe('(Component) CounterComponent', () => {
  let _component;
  const _dispatch = sinon.spy();
  const incrementFunc = sinon.spy();
  const _actions = {
    incrementCounter: incrementFunc
  };
  beforeEach(() => {
    _component = mount(<CounterComponent count={0} dispatch={_dispatch} actions={_actions} />);
  });

  it('Can mount', () => {
    expect(_component.type()).to.equal(CounterComponent);
  });

  it('Can increment the counter', () => {
    _component.find('#incrementButton').first().simulate('click');
    expect(_dispatch).to.have.been.calledOnce();
    expect(incrementFunc).to.have.been.calledOnce();
  });
});
