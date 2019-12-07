import pick from 'lodash/pick';
import authApi from '../../api/authClient';
import history from '../../history';
import {
  REGISTRATION_REQUEST_SENT,
  REGISTRATION_SUCCESSFUL,
  SIGN_IN_REQUEST_SENT,
  SIGN_IN_SUCCESSFUL,
  SIGN_OUT_REQUEST_SENT,
  SIGN_OUT_SUCCESSFUL,
  VERIFICATION_REQUEST_SENT,
  VERIFICATION_SUCCESSFUL,
  ACCOUNT_UPDATE_REQUEST_SENT,
  ACCOUNT_UPDATE_SUCCESSFUL,
  AUTHENTICATION_ERROR,
} from './types'

const ACCEPTED_JWT_HEADERS = [
  'access-token',
  'uid',
  'client'
]

const ACCEPTED_USER_DATA = [
  'name',
  'email'
]

export const registerUser = formValues => async (dispatch) => {
  dispatch({ type: REGISTRATION_REQUEST_SENT });

  try {
    await authApi.post('/auth', formValues);

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
    const response = await authApi.post('/auth/sign_in', formValues);
    const userData = pick(response.data.data, ACCEPTED_USER_DATA)

    dispatch({
      type: SIGN_IN_SUCCESSFUL,
      payload: userData
    });

    storeAuthHeaders(response.headers)
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

  const auth_headers = JSON.parse(localStorage.getItem('auth_headers'))

  try {
    await authApi.delete('/auth/sign_out', { headers: auth_headers })

    dispatch({ type: SIGN_OUT_SUCCESSFUL });

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
    const response = await authApi.get('/auth/validate_token', { params: params });
    const userData = pick(response.data.data, ACCEPTED_USER_DATA)

    dispatch({
      type: VERIFICATION_SUCCESSFUL,
      payload: userData
    });

    // API sends back a new access-token every request, even after verifying the first one
    // storeAuthHeaders(response.headers)

  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: null
    });
  }
}

export const updateUser = formValues => async dispatch => {
  dispatch({ type: ACCOUNT_UPDATE_REQUEST_SENT });

  try {
    const auth_headers = JSON.parse(localStorage.getItem('auth_headers'))
    const response = await authApi.put('/auth', formValues, {headers: auth_headers});
    const userData = pick(response.data.data, ACCEPTED_USER_DATA)

    dispatch({
      type: ACCOUNT_UPDATE_SUCCESSFUL,
      payload: userData
    });

    // API sends back a new access-token every request, even after verifying the first one
    // storeAuthHeaders(response.headers)

  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.response.data.errors
    });
  }
}

const storeAuthHeaders = (responseHeaders) => {
  const jwtHeaders = pick(responseHeaders, ACCEPTED_JWT_HEADERS);
  localStorage.setItem('auth_headers', JSON.stringify(jwtHeaders))
}
