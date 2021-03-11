import * as types from "../actions/types";

const initialState = {
  airlines: [], // Flights Data,
  loading: true,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AIRLINE:
      return { ...state, airlines: action.payload, loading: false };

    default:
      return state;
  }
};

export default flightReducer;
