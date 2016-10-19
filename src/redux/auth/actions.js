import { push } from 'react-router-redux'

import firebaseApi from '../../api/firebase'

export const LOGIN_REQUEST = '@@login/REQUEST'
export const LOGIN_SUCCESS = '@@login/SUCCESS'
export const LOGIN_FAILURE = '@@login/FAILURE'

export const LOGOUT_REQUEST = '@@logout/REQUEST'
export const LOGOUT_SUCCESS = '@@logout/SUCCESS'
export const LOGOUT_FAILURE = '@@logout/FAILURE'

export function signIn(user) {
  return dispatch => {
    dispatch(loginRequest())
    return firebaseApi.initAuth().then((existingUser) => {
      return firebaseApi.signIn(user).then((userData) => {
        return dispatch(loginSuccesful(userData.uid))
      })
      .catch(error => {
        dispatch(loginFailure(error))
      })
    })
  }
}

export function signOut() {
  return dispatch => {
    dispatch(logoutRequest())
    return firebaseApi.authSignOut().then(() => {
      dispatch(logoutSuccesful())
      dispatch(push('/'))
    })
    .catch(error => {
      dispatch(logoutFailure(error))
    })
  }
}

const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: { error },
})

const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
})

const logoutSuccesful = () => ({
  type: LOGOUT_SUCCESS,
})

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
})

const loginRequest = () => ({
  type: LOGIN_REQUEST,
})

const loginSuccesful = (userUID) => ({
  type: LOGIN_SUCCESS,
  payload: {
    data: { userUID },
  },
})
