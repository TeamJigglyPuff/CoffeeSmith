import * as types from '../constants/actionTypes';

export const fetchAllCoffeesActionCreator = dispatch => {
  fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: types.GET_ALL_COFFEES,
        payload: data
      })
      return;
    })
    .catch(err => {
      console.log(err);
    })
}

export const addCoffeeToCartActionCreator = coffeeToAdd => ({
  type: types.ADD_TO_CART,
  payload: coffeeToAdd
})