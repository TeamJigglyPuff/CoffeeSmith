import * as types from '../constants/actionTypes';

export const fetchAllCoffeesActionCreator = dispatch => {
  console.log('getting coffees');
  fetch('http://localhost:3000/api', {
    headers: {
      'Content-type': 'application/json',
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNywiZW1haWwiOiJPYmktV29uQGVtYWlsLmNvbSIsImlhdCI6MTY0NjIzODIxNSwiZXhwIjoxNjQ2MjU2MjE1fQ.XGLho2ddSCEqqjzi0knmE-CIcQRBBxuSjcvYfvdIix4',
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log('data', data);
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