import * as types from "../actions/types";

const initialState = {
  airlines: [], // Airlines Data,
  loading: true,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AIRLINE:
      return { ...state, airlines: action.payload, loading: false };

    case types.ADD_AIRLINE:
      const { newAirline } = action.payload;
      return {
        ...state,
        flight: [...state.flight, newAirline],
      };
    default:
      return state;
  }
};

export default flightReducer;
