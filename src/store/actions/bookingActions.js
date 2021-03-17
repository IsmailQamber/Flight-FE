import * as types from "./types";

export const booking = (bookFlight) => (
  console.log("action", bookFlight),
  {
    type: types.BOOK_FLIGHT,
    payload: bookFlight,
  }
);
