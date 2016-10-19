import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable'

import * as actions from './actions'

const initialState = Immutable.fromJS({
  currentUser: undefined,
})

const loginReducer = {
  [actions.LOGIN_REQUEST]: (state) => state.set('currentUser', undefined),
  [actions.LOGIN_SUCCESS]: (state, action) => state.set('currentUser', Immutable.fromJS(action.payload.data)),
  [actions.LOGIN_FAILURE]: (state) => state.set('currentUser', undefined),
}

const logoutReducer = {
  [actions.LOGOUT_REQUEST]: (state) => state,
  [actions.LOGOUT_SUCCESS]: (state) => state.set('currentUser', undefined),
  [actions.LOGOUT_FAILURE]: (state) => state,
}

export default createReducer(initialState, {
  ...loginReducer,
  ...logoutReducer,
})
