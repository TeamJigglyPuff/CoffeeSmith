import React from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import CartDisplay from "../Components/CartDisplay";
import ShowroomDisplay from '../Components/ShowroomDisplay.jsx'


const ShowroomContainer = () => {
  const dispatch = useDispatch();
  //dispatches:
  const fetchCoffees = () => actions.fetchAllCoffeesActionCreator(dispatch);
  //props list:
  const coffeesList = useSelector((state) => state.coffees.coffeesList)

  return (
    <div>
      <ShowroomDisplay fetchCoffees={fetchCoffees} coffeesList={coffeesList} />
      <CartDisplay />
    </div>
  )
}

export default connect(null, null)(ShowroomContainer);