import { connect } from 'react-redux';
import CounterComponent from '../../../components/CounterComponent';
import actions from '../../../actions/countActions';

const mapStateToCounterProps = (state) => {
  return { ...state.countState };
};

const mapDispatchToCounterProps = function (dispatch) {
  return ({
    dispatch: dispatch,
    actions: actions
  });
};

// Sync route definition
export default () => ({
  title: 'Counter',
  components : {
    mainContent: connect(mapStateToCounterProps, mapDispatchToCounterProps)(CounterComponent)
  }
});
