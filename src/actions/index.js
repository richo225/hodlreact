import pick from 'lodash/pick';
import api from '../api/authClient';
import history from '../history';
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
} from './types';

const ACCEPTED_JWT_HEADERS = [
  'access-token',
  'uid',
  'client'
]

export const registerUser = formValues => async (dispatch) => {
  dispatch({ type: REGISTRATION_REQUEST_SENT });

  try {
    await api.post('/auth', formValues);

    dispatch({ type: REGISTRATION_SUCCESSFUL });

    history.push('/')

  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.response.data.errors.full_messages
    });
  }
};

export const loginUser = formValues => async (dispatch) => {
  dispatch({ type: SIGN_IN_REQUEST_SENT });

  try {
    const response = await api.post('/auth/sign_in', formValues);

    dispatch({
      type: SIGN_IN_SUCCESSFUL
    });

    const payload = pick(response.headers, ACCEPTED_JWT_HEADERS)
    localStorage.setItem('auth_headers', JSON.stringify(payload))

    history.push('/')

  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.response.data.errors
    });
  }
}

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: SIGN_OUT_REQUEST_SENT });

  const headers = JSON.parse(localStorage.getItem('auth_headers'))

  try {
    await api.delete('/auth/sign_out', { headers: headers })

    dispatch({
      type: SIGN_OUT_SUCCESSFUL
    });

    localStorage.removeItem('auth_headers')
    history.push('/login')

  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.response.data.errors
    });
  }
}

export const verifyUser = () => async dispatch => {
  dispatch({ type: VERIFICATION_REQUEST_SENT });

  const params = JSON.parse(localStorage.getItem('auth_headers'))

  try {
    const response = await api.get('/auth/validate_token', { params: params });

    dispatch({
      type: VERIFICATION_SUCCESSFUL
    });

    // API sends back a new access-token every request, even after verifying the first one
    const payload = pick(response.headers, ACCEPTED_JWT_HEADERS);
    localStorage.setItem('auth_headers', JSON.stringify(payload))

  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: null
    });

  }
}
