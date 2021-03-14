import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { checkToken } from "./actions/authActions";
import { fetchFlights } from "./actions/flightActions";
import { fetchAirline } from "./actions/airlineActions";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkToken());
// store.dispatch(fetchFlights());
store.dispatch(fetchAirline());

export default store;
