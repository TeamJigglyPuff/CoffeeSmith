import { combineReducers } from "redux";
import reducer from "./reducer";

import workoutsReducer from './reducer';

const reducers = combineReducers({
  reducer: reducer,
});

export default reducers;