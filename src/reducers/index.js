import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  transaction: transactionReducer
});
