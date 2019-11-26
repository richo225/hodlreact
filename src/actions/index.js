import pick from 'lodash/pick';
import api from '../api/authClient';
import history from '../history';
import {
  REGISTRATION_SUCCESSFUL,
  SIGN_IN_SUCCESSFUL,
  SIGN_OUT_SUCCESSFUL,
  AUTHENTICATION_ERROR
} from './types';

const ACCEPTED_JWT_HEADERS = [
  'access-token',
  'uid',
  'client'
]

export const registerUser = formValues => async (dispatch) => {
  try {
    await api.post('/auth', formValues);

    dispatch({
      type: REGISTRATION_SUCCESSFUL,
      payload: {}
    });
  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.response.data.errors.full_messages
    });
  }
};

export const loginUser = formValues => async (dispatch) => {
  try {
    const response = await api.post('/auth/sign_in', formValues);

    dispatch({
      type: SIGN_IN_SUCCESSFUL,
      payload: pick(response.headers, ACCEPTED_JWT_HEADERS)
    });
  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.response.data.errors
    });
  }
}

export const logoutUser = () => async (dispatch, getState) => {
  const headers = getState().auth.authenticated_user

  try {
    await api.delete('/auth/sign_out', { headers: headers })

    dispatch({
      type: SIGN_OUT_SUCCESSFUL,
      payload: {}
    });
  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.response.data.errors
    });
  }
}
