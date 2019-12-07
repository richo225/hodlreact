import dataApi from '../../api/dataClient';
import {
  FETCH_TRANSACTIONS,
  SHOW_TRANSACTION_MODAL,
  HIDE_TRANSACTION_MODAL,
  CREATE_TRANSACTION_REQUEST_SENT,
  CREATE_TRANSACTION_SUCCESSFUL,
  DELETE_TRANSACTION_REQUEST_SENT,
  DELETE_TRANSACTION_SUCCESSFUL,
  TRANSACTION_ERROR
} from './types'

export const fetchTransactions = () => async dispatch => {
  try {
    const response = await dataApi.get('/transactions');

    dispatch({
      type: FETCH_TRANSACTIONS,
      payload: response.data.data
    })

  } catch(error) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: error.response
    });
  }
}

export const showTransactionModal = () => {
  return( { type: SHOW_TRANSACTION_MODAL } )
}

export const hideTransactionModal = () => {
  return( { type: HIDE_TRANSACTION_MODAL } )
}

export const createTransaction = formValues => async dispatch => {
  dispatch({ type: CREATE_TRANSACTION_REQUEST_SENT })

  try {
    const response = await dataApi.post('/transactions', formValues);

    dispatch({
      type: CREATE_TRANSACTION_SUCCESSFUL,
      payload: response.data.data
    });

    dispatch({ type: HIDE_TRANSACTION_MODAL });

  } catch(error) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: error.response
    });
  }
}

export const deleteTransaction = transactionId => async dispatch => {
  dispatch({ type: DELETE_TRANSACTION_REQUEST_SENT })

    try {
      const response = await dataApi.delete(`/transactions/${transactionId}`);

      dispatch({
        type: DELETE_TRANSACTION_SUCCESSFUL,
        payload: transactionId
      });

    } catch(error) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: error.response
      });
    }
}
