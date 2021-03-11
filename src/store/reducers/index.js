import { combineReducers } from "redux";

//Reducers
import authReducer from "./authReducer";
import flightReducer from "./flightReducer";

const rootReducer = combineReducers({
  authReducer,
  flightReducer,
});

export default rootReducer;
