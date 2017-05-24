import createStore from './createStore';
describe('(Store) createStore', () => {
  let _store;

  beforeEach(() => {
    _store = createStore();
  });

  it('Creates a store object with functions', () => {
    expect(_store).to.exist();
    expect(_store).to.be.an('object');
    expect(_store).to.have.property('dispatch');
    expect(_store.dispatch).to.be.a('function');
    expect(_store).to.have.property('subscribe');
    expect(_store.subscribe).to.be.a('function');
  });
});
