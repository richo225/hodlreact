import {
  AUTHENTICATION_SUCCESSFUL,
  AUTHENTICATION_ERROR
} from '../actions/types';

const DEFAULT_STATE = {
  authenticated_user: '',
  errorMessages: null
}

export default function(state=DEFAULT_STATE, action) {
  switch (action.type) {
    case AUTHENTICATION_SUCCESSFUL:
      return {...state, authenticated_user: action.payload}
    case AUTHENTICATION_ERROR:
      return {...state, errorMessages: action.payload}
    default:
      return state
  }
}
