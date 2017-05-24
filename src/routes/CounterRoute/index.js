import IndexRoute from './IndexRoute';

export default (store) => ({
  path: 'counter',
  indexRoute: IndexRoute(store)
});
