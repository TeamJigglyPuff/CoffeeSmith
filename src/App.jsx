import React from "react";
import {
  Link,
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux'
import * as types from './constants/actionTypes'
import MainContainer from "./containers/MainContainer";

const App = () => {
  return (
    <div>
      <Router>
        <MainContainer />
        <Routes>
          <Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default connect()(App);