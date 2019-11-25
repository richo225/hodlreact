import { AUTHENTICATION_SUCCESSFUL } from '../actions/types';

const DEFAULT_STATE = {
  authenticated_user: ''
}

export default function(state=DEFAULT_STATE, action) {
  switch (action.type) {
    case AUTHENTICATION_SUCCESSFUL:
      return {...state, authenticated_user: action.payload}
    default:
      return state
  }
}
