import {
  REGISTRATION_REQUEST_SENT,
  REGISTRATION_SUCCESSFUL,
  SIGN_IN_REQUEST_SENT,
  SIGN_IN_SUCCESSFUL,
  SIGN_OUT_REQUEST_SENT,
  SIGN_OUT_SUCCESSFUL,
  VERIFICATION_REQUEST_SENT,
  VERIFICATION_SUCCESSFUL,
  AUTHENTICATION_ERROR
} from '../actions/types';

const DEFAULT_STATE = {
  errorMessages: null,
  isSignedIn: false,
  isLoading: false,
  currentUser: null
}

export default function(state=DEFAULT_STATE, action) {
  switch (action.type) {
    case REGISTRATION_REQUEST_SENT:
      return {...state, isLoading: true}
    case REGISTRATION_SUCCESSFUL:
      return {...state, isLoading: false}
    case SIGN_IN_REQUEST_SENT:
      return {...state, isLoading: true}
    case SIGN_IN_SUCCESSFUL:
      return {...state, isSignedIn: true, isLoading: false, currentUser: action.payload}
    case SIGN_OUT_REQUEST_SENT:
      return {...state, isLoading: true}
    case SIGN_OUT_SUCCESSFUL:
      return {...state, isSignedIn: false, isLoading: false, currentUser: null}
    case VERIFICATION_REQUEST_SENT:
      return {...state, isLoading: true}
    case VERIFICATION_SUCCESSFUL:
      return {...state, isSignedIn: true, isLoading: false, currentUser: action.payload}
    case AUTHENTICATION_ERROR:
      return {...state, errorMessages: action.payload, isLoading: false}
    default:
      return state
  }
}
