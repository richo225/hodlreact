import pick from 'lodash/pick';
import api from '../api/authClient';
import history from '../history';
import {
  REGISTRATION_SUCCESSFUL,
  SIGN_IN_SUCCESSFUL,
  SIGN_OUT_SUCCESSFUL,
  VERIFICATION_SUCCESSFUL,
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

    history.push('/')

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
    const payload = pick(response.headers, ACCEPTED_JWT_HEADERS)

    dispatch({
      type: SIGN_IN_SUCCESSFUL,
      payload: payload
    });

    localStorage.setItem('authenticated_user', JSON.stringify(payload))
    history.push('/')

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

    localStorage.removeItem('authenticated_user')
    history.push('/login')

  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.response.data.errors
    });
  }
}

export const verifyUser = () => async dispatch => {
  const params = JSON.parse(localStorage.getItem('authenticated_user'))

  try {
    const response = await api.get('/auth/validate_token', { params: params });
    const payload = pick(response.headers, ACCEPTED_JWT_HEADERS);

    dispatch({
      type: VERIFICATION_SUCCESSFUL
    });

    localStorage.setItem('authenticated_user', JSON.stringify(payload))

  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR
    });
  }
}
