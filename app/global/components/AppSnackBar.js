import React from 'react';
import { Snackbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { ERROR_REDUCER } from './../dataStore/reducers/reducerTypes';
import { clearError } from '../dataStore/actions/errorActions';

const AppSnackBar = props => {
  const error = useSelector(state => state[ERROR_REDUCER].error);
  const dispatch = useDispatch();
  return (
    <Snackbar
      visible={error.length > 0}
      onDismiss={val => console.log('dismiss', val)}
      action={{
        label: 'clear',
        onPress: () => {
          dispatch(clearError());
        },
      }}>
      {error}
    </Snackbar>
  );
};

export default AppSnackBar;
