import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import transactionsReducer from './transactionsReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  transactions: transactionsReducer
});
