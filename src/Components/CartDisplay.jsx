import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import Coffee from './Coffee.jsx';

const CartDisplay = props => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.coffees.shoppingCart)

  useEffect(() => {

  }, [shoppingCart])

  const cartContents = [];
  for (let i = 0; i < shoppingCart.length; i++) {
    cartContents.push(<Coffee coffeeObj={shoppingCart[i]} inCart="true" />)
  }

  return (
    <div>
      <h3>Shopping Cart: </h3>
      {cartContents}
    </div>
  )

}

export default connect(null, null)(CartDisplay);