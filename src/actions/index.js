import api from '../api/authClient';
import {
  REGISTRATION_SUCCESSFUL,
  SIGN_IN_SUCCESSFUL,
  AUTHENTICATION_ERROR
} from './types';

export const registerUser = formValues => async (dispatch) => {
  try {
    const response = await api.post('/auth', formValues);

    dispatch({
      type: REGISTRATION_SUCCESSFUL,
      payload: response.data
    });
  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.response.data.errors.full_messages
    });
  }
};

export const loginUser = formValues => async (dispatch)=> {
  try {
    const response = await api.post('/auth/sign_in', formValues);

    dispatch({
      type: SIGN_IN_SUCCESSFUL,
      payload: response.data
    });
  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.response.data.errors
    });
  }
}
