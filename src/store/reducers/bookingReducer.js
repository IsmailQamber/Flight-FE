import * as types from "../actions/types";

const initialState = {
  bookings: [
    // {
    //   flightId: 1,
    // },
    // {
    //   flightId: 2,
    // },
    // {
    //   flightId: 3,
    // },
    // {
    //   flightId: 4,
    // },
  ],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BOOK_FLIGHT:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };

    default:
      return state;
  }
};

export default bookingReducer;
