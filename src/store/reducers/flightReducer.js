import * as types from "../actions/types";

const initialState = {
  flights: [], // Flights Data,
  loading: true,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FLIGHT:
      return { ...state, flights: action.payload, loading: false };

    case types.ADD_FLIGHT:
      // const { newFlight } = action.payload;
      return {
        ...state,
        flight: [...state.flight, action.payload.newFlight], //newFlight],
      };

    case types.REMOVE_FLIGHT:
      return {
        ...state,
        flight: state.flight.filter(
          (flight) => flight.id !== action.payload.flightId
        ),
      };

    case types.UPDATE_FLIGHT:
      const { updatedFlight } = action.payload;
      return {
        ...state,
        flight: state.flights.map((flight) =>
          flight.id === updatedFlight.id ? updatedFlight : flight
        ),
      };

    case types.SEARCH_FLIGHT:
      return {
        ...state,
        flight: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default flightReducer;
