import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import authClient from '../../api/authClient';
import moxios from 'moxios';
import * as mockData from '../../../spec/__mocks__/mockAuthClient';
import * as actions from './index';
import * as types from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  beforeEach(() => moxios.install(authClient));
  afterEach(() => moxios.uninstall(authClient));

  it('creates REGISTRATION_SUCCESSFUL upon sign up success', () => {
    const { authResponse, signUpData } = mockData.signUpSuccess;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({ status: 200, response: authResponse })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: types.REGISTRATION_REQUEST_SENT },
      { type: types.REGISTRATION_SUCCESSFUL }
    ]

    return store.dispatch(actions.registerUser(signUpData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates AUTHENTICATION_ERROR upon sign up failure', () => {
    const { authResponse, signUpData } = mockData.signUpFailure;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({ status: 422, response: authResponse })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: types.REGISTRATION_REQUEST_SENT },
      {
        type: types.AUTHENTICATION_ERROR,
        payload: authResponse.errors.full_messages
      }
    ]

    return store.dispatch(actions.registerUser(signUpData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates SIGN_IN_SUCCESSFUL upon sign in success', () => {
    const { authResponse, signInData } = mockData.signInSuccess;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({ status: 200, response: authResponse })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: types.SIGN_IN_REQUEST_SENT },
      { type: types.SIGN_IN_SUCCESSFUL,
        payload: {
          email: authResponse.data.email,
          name: authResponse.data.name
        }
      }
    ]

    return store.dispatch(actions.loginUser(signInData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates AUTHENTICATION_ERROR upon sign in failure', () => {
    const { authResponse, signInData } = mockData.signInFailure;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({ status: 401, response: authResponse })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: types.SIGN_IN_REQUEST_SENT },
      {
        type: types.AUTHENTICATION_ERROR,
        payload: authResponse.errors
      }
    ]

    return store.dispatch(actions.loginUser(signInData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates VERIFICATION_SUCCESSFUL upon verification success', () => {
    const { authResponse, verificationData } = mockData.verificationSuccess;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({ status: 200, response: authResponse })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: types.VERIFICATION_REQUEST_SENT },
      { type: types.VERIFICATION_SUCCESSFUL,
        payload: {
          email: authResponse.data.email,
          name: authResponse.data.name
        }
      }
    ]

    return store.dispatch(actions.verifyUser(verificationData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates AUTHENTICATION_ERROR upon verification failure', () => {
    const { authResponse, verificationData } = mockData.verificationFailure;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({ status: 401, response: authResponse })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: types.VERIFICATION_REQUEST_SENT },
      {
        type: types.AUTHENTICATION_ERROR,
        payload: null
      }
    ]

    return store.dispatch(actions.verifyUser(verificationData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates ACCOUNT_UPDATE_SUCCESSFUL upon account update success', () => {
    const { authResponse, updateData, updateHeaders } = mockData.updateSuccess;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({ status: 200, response: authResponse })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: types.ACCOUNT_UPDATE_REQUEST_SENT },
      { type: types.ACCOUNT_UPDATE_SUCCESSFUL,
        payload: {
          email: authResponse.data.email,
          name: authResponse.data.name
        }
      }
    ]

    return store.dispatch(actions.updateUser(updateData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates AUTHENTICATION_ERROR upon account update failure', () => {
    const { authResponse, updateData, updateHeaders } = mockData.updateSuccess;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({ status: 404, response: authResponse })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: types.ACCOUNT_UPDATE_REQUEST_SENT },
      {
        type: types.AUTHENTICATION_ERROR,
        payload: authResponse.errors
      }
    ]

    return store.dispatch(actions.updateUser(updateData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
