import api from '../api/authClient';
import { AUTHENTICATION_SUCCESSFUL } from './types';
import { AUTHENTICATION_ERROR } from './types';

export const registerUser = formValues => async (dispatch) => {
  try {
    const response = await api.post('/auth', formValues);

    dispatch({
      type: AUTHENTICATION_SUCCESSFUL,
      payload: response.data
    });
  } catch(error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.response.data.errors.full_messages
    });
  }
};
