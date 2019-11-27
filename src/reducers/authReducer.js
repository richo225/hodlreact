import {
  REGISTRATION_SUCCESSFUL,
  SIGN_IN_SUCCESSFUL,
  SIGN_OUT_SUCCESSFUL,
  VERIFICATION_SUCCESSFUL,
  AUTHENTICATION_ERROR
} from '../actions/types';

const DEFAULT_STATE = {
  errorMessages: null,
  isSignedIn: false
}

export default function(state=DEFAULT_STATE, action) {
  switch (action.type) {
    case REGISTRATION_SUCCESSFUL:
      return state
    case SIGN_IN_SUCCESSFUL:
      return {...state, isSignedIn: true}
    case VERIFICATION_SUCCESSFUL:
      return {...state, isSignedIn: true}
    case SIGN_OUT_SUCCESSFUL:
      return {...state, isSignedIn: false}
    case AUTHENTICATION_ERROR:
      return {...state, errorMessages: action.payload}
    default:
      return state
  }
}
