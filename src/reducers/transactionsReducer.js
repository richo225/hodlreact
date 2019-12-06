import mapKeys from 'lodash/mapKeys';
import {
  FETCH_TRANSACTIONS,
  SHOW_TRANSACTION_MODAL,
  HIDE_TRANSACTION_MODAL,
  CREATE_TRANSACTION_REQUEST_SENT,
  CREATE_TRANSACTION_SUCCESSFUL,
  TRANSACTION_ERROR
} from '../actions/types';

const DEFAULT_STATE = {
  errorMessages: null,
  isLoading: false,
  showModal: false,
  transactionList: []
}

export default function(state=DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return {...state, transactionList: action.payload }
    case SHOW_TRANSACTION_MODAL:
      return {...state, showModal: true}
    case SHOW_TRANSACTION_MODAL:
      return {...state, showModal: true}
    case HIDE_TRANSACTION_MODAL:
      return {...state, showModal: false}
    case CREATE_TRANSACTION_REQUEST_SENT:
      return {...state, isLoading: true}
    case CREATE_TRANSACTION_SUCCESSFUL:
      return {...state, isLoading: false}
    case TRANSACTION_ERROR:
      return {...state, errorMessages: action.payload, isLoading: false}
    default:
      return state
  }
}
