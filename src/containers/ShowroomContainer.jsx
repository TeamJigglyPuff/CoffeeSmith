import React from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import ShowroomDisplay from '../Components/ShowroomDisplay.jsx'


function ShowroomContainer() {
  const dispatch = useDispatch();
  //dispatches:
  const fetchCoffees = () => actions.fetchAllCoffeesActionCreator(dispatch);
  //props list:
  const coffeesList = useSelector((state) => state.coffees.coffeesList)

  return (
    <ShowroomDisplay fetchCoffees={fetchCoffees} coffeesList={coffeesList} />
  )
}

export default connect(null, null)(ShowroomContainer);