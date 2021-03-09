import instance from "./instance";
// ACTION TYPES
import * as types from "./types";

export const fetchFlights = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights");
      dispatch({ type: types.FETCH_FLIGHT, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};
