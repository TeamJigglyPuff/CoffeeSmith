import * as types from '../constants/actionTypes';

const defaultState = {
  coffeesList: []
}

function coffeesReducer(state = defaultState, action) {
  let coffeesList;

  switch (action.type) {
    case types.GET_ALL_COFFEES: {
      coffeesList = state.coffeesList.slice();
      coffeesList.push(...action.payload);
      return {
        ...state,
        coffeesList
      }
    }

    default: {
      return state
    }
  }
}

export default coffeesReducer;