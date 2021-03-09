import { FETCH_FLIGHT } from "../actions/types";

// ACTION TYPES
import * as types from "../actions/types";

const initialState = {
  flights: [], //Flights Data,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FLIGHT:
      return { ...state, flights: action.payload };
    default:
      return state;
  }
};

export default flightReducer;
