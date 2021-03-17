import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { checkToken } from "./actions/authActions";
import { fetchFlights } from "./actions/flightActions";
import { fetchAirline } from "./actions/airlineActions";
import { fetchAirports } from "./actions/airportActions";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// Review: remove unused dispatchs and imports
store.dispatch(checkToken());
// store.dispatch(fetchFlights());
store.dispatch(fetchAirline());
store.dispatch(fetchAirports());

export default store;
