import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

const applyMiddleware = require("redux").applyMiddleware;

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
