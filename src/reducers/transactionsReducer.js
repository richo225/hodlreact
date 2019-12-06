import mapKeys from 'lodash/mapKeys';
import omit from 'lodash/omit'
import {
  FETCH_TRANSACTIONS,
  SHOW_TRANSACTION_MODAL,
  HIDE_TRANSACTION_MODAL,
  CREATE_TRANSACTION_REQUEST_SENT,
  CREATE_TRANSACTION_SUCCESSFUL,
  DELETE_TRANSACTION_REQUEST_SENT,
  DELETE_TRANSACTION_SUCCESSFUL,
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
      return {...state, transactionList: {...state.transactionList, ...mapKeys(action.payload, 'id')} }
    case SHOW_TRANSACTION_MODAL:
      return {...state, showModal: true}
    case HIDE_TRANSACTION_MODAL:
      return {...state, showModal: false}
    case CREATE_TRANSACTION_REQUEST_SENT:
      return {...state, isLoading: true}
    case CREATE_TRANSACTION_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        transactionList: {...state.transactionList, [action.payload.id]: action.payload}
      }
    case DELETE_TRANSACTION_REQUEST_SENT:
      return {...state, isLoading: true}
    case DELETE_TRANSACTION_SUCCESSFUL:
      return {...state, transactionList: omit(state.transactionList, action.payload)}
    case TRANSACTION_ERROR:
      return {...state, errorMessages: action.payload, isLoading: false}
    default:
      return state
  }
}
