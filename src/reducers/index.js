import { combineReducers } from "redux";
import coffeesReducer from "./coffeesReducer";


const reducers = combineReducers({
  coffees: coffeesReducer,
});

export default reducers;