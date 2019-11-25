import api from '../api/authClient';
import { AUTHENTICATION_SUCCESSFUL } from './types';

export const registerUser = formValues => async (dispatch) => {
  const response = await api.post('/auth', formValues);

  dispatch({
    type: AUTHENTICATION_SUCCESSFUL,
    payload: response.data
  });
};
