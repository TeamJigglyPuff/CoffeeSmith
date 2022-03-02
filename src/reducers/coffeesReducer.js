import * as types from '../constants/actionTypes';

const defaultState = {
  coffeesList: [],
  shoppingCart: []
}

function coffeesReducer(state = defaultState, action) {
  let coffeesList;
  let shoppingCart;

  switch (action.type) {
    case types.GET_ALL_COFFEES: {
      coffeesList = state.coffeesList.slice();
      coffeesList.push(...action.payload);
      return {
        ...state,
        coffeesList
      }
    }

    case types.ADD_TO_CART: {
      shoppingCart = state.shoppingCart.slice();
      shoppingCart.push(action.payload);
      console.log('shopping cart in reducer: ', shoppingCart);
      return {
        ...state,
        shoppingCart
      }
    }

    default: {
      return state
    }
  }
}

export default coffeesReducer;