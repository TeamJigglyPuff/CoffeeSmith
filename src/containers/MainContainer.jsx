import React from "react";
import { connect, useSelector, useDispatch } from 'react-redux'
import ShowroomContainer from './ShowroomContainer.jsx'
import CartContainer from './CartContainer';
import UserLoginContainer from './UserLoginContainer';
import UserRegistrationContainer from './UserRegistrationContainter';

function MainContainer() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Bean Boyz Bean Bundles</h1>
      <ShowroomContainer />
      <CartContainer />
      <UserLoginContainer />
      <UserRegistrationContainer />
    </div>
  )
}

export default connect(null, null)(MainContainer);