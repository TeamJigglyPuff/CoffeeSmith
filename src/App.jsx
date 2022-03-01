import React from "react";
import {
  Link,
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux'
import * as types from './constants/actionTypes'

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    setUser: (userObj) => {
      dispatch({type: types.SET_USER, payload: userObj})
    }
  }
}

const App = () => {
  <div>
    <Router>
      <h1>Welcome to CoffeeSmith</h1>
      <Routes>
        <Route>
        </Route>
      </Routes>
    </Router>
  </div>
}

export default connect()(App);