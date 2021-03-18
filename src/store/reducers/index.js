import { combineReducers } from "redux";

//Reducers
import authReducer from "./authReducer";
import flightReducer from "./flightReducer";
import airlineReducer from "./airlineReducer";
import airportReducer from "./airportReducer";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
  bookingReducer,
  authReducer,
  flightReducer,
  airlineReducer,
  airportReducer,
});

export default rootReducer;
