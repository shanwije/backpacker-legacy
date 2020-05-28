import { connect } from 'react-redux';
import * as loginActions from './../Actions';
import { useDispatch } from 'react-redux';

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    id: state.loginReducer.id,
  };
};
const dispatch = useDispatch();
const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

const mapDispatchToProps = { onLogin };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
