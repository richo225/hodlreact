import reducer from './authReducer';
import * as types from '../actions/types';

const initialState = {
  errorMessages: null,
  isSignedIn: false,
  isLoading: false
};

const signedInState = {
  errorMessages: null,
  isSignedIn: true
};

describe('authReducer', () => {
  it('should return the default state', () => {
    expect(reducer(undefined, {})).toEqual({
      errorMessages: null,
      isSignedIn: false,
      isLoading: false
    })
  });

  it('should handle sent registration', () => {
    expect(reducer(initialState, { type: types.REGISTRATION_REQUEST_SENT })).toEqual({
      ...initialState,
      isLoading: true
    })
  })

  it('should handle successful registration', () => {
    expect(reducer(initialState, { type: types.REGISTRATION_SUCCESSFUL })).toEqual(initialState)
  });

  it('should handle sent sign in', () => {
    expect(reducer(initialState, { type: types.SIGN_IN_REQUEST_SENT })).toEqual({
      ...initialState,
      isLoading: true
    })
  })

  it('should handle successful sign in', () => {
    expect(reducer(initialState, { type: types.SIGN_IN_SUCCESSFUL })).toEqual({
      ...initialState,
      isSignedIn: true,
      isLoading: false
    })
  });

  it('should handle sent sign out', () => {
    expect(reducer(initialState, { type: types.SIGN_OUT_REQUEST_SENT })).toEqual({
      ...initialState,
      isLoading: true
    })
  })

  it('should handle successful sign out', () => {
    expect(reducer(signedInState, { type: types.SIGN_OUT_SUCCESSFUL })).toEqual({
      ...signedInState,
      isSignedIn: false,
      isLoading: false
    })
  });

  it('should handle sent verification', () => {
    expect(reducer(initialState, { type: types.VERIFICATION_REQUEST_SENT })).toEqual({
      ...initialState,
      isLoading: true
    })
  })

  it('should handle successful user verification', () => {
    expect(reducer(initialState, { type: types.VERIFICATION_SUCCESSFUL })).toEqual({
      ...initialState,
      isSignedIn: true,
      isLoading: false
    })
  });

  it('should handle authentication failure', () => {
    expect(reducer(initialState, {
      type: types.AUTHENTICATION_ERROR,
      payload: { errorMessages: 'This is an error' },
    })).toEqual({
      ...initialState,
      errorMessages: { errorMessages: 'This is an error' },
      isLoading: false
    });
  });
});
