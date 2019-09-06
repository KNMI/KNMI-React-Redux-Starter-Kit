import locationReducer, { locationChange } from './location';
describe('(Store) location', () => {
  let initState;
  beforeEach(() => {
    initState = locationReducer(null, {});
  });
  it('starts with an empty state', () => {
    expect(initState).to.equal(null);
  });

  it('disregards the initialstate', () => {
    const filledState = locationReducer({ location: '/asdf' }, {});
    expect(filledState).to.eql({ location: '/asdf' });
    const newState = locationReducer(filledState, locationChange('/hi'));
    expect(newState).to.eql({ location: '/hi' });
  });

  it('changes the location appropriately', () => {
    const newState = locationReducer(initState, locationChange('/hi'));
    expect(newState).to.exist();
    expect(newState).to.eql({ location: '/hi' });
  });
});
