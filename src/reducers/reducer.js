import * as types from '../constants/actionTypes';

const defaultState = {
  currentUser: {}
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default: return state
  }
}

export default reducer;