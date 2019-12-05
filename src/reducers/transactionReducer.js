import {
  CREATE_TRANSACTION_REQUEST_SENT,
  CREATE_TRANSACTION_SUCCESSFUL,
  TRANSACTION_ERROR
} from '../actions/types';

const DEFAULT_STATE = {
  errorMessages: null,
  isLoading: false,
}

export default function(state=DEFAULT_STATE, action) {
  switch (action.type) {
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
