import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import { GET_LIST, GET_LIST_START } from '../actions/list'

const initialState = Immutable.fromJS({
  quantity: 0,
  isFetching: false,
  list: [],
})

export default createReducer(initialState, {
  [GET_LIST_START]: (state, action) => {
    return state
      .set('isFetching', true)
      .set('quantity', action.quantity)
  },
  [GET_LIST]: (state, action) => {
    return state
      .set('isFetching', false)
      .set('quantity', action.quantity)
      .set('list', Immutable.fromJS(action.list))
  },
})
