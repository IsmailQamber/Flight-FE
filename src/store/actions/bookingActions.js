import instance from "./instance";
import * as types from "./types";

export const booking = (bookFlight) => async (dispatch) => {
  try {
    const res = await instance.post("/booking", bookFlight);
    dispatch({
      type: types.BOOK_FLIGHT,
      // payload: bookFlight,
    });
  } catch (error) {
    console.log(error);
  }
};
