import { combineReducers } from "redux";

//Reducers
import authReducer from "./authReducer";
import flightReducer from "./flightReducer";
import airlineReducer from "./airlineReducer";

const rootReducer = combineReducers({
  authReducer,
  flightReducer,
  airlineReducer,
});

export default rootReducer;
