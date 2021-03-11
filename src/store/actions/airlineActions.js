import instance from "./instance";
import * as types from "./types";

export const fetchAirline = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/airlines");
      dispatch({ type: types.FETCH_AIRLINE, payload: res.data });
    } catch (error) {
      console.log("fetchFlights airportActions Error:", error);
    }
  };
};
