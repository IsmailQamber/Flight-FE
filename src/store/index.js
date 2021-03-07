import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { checkToken } from "./actions/authActions";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkToken());

export default store;
