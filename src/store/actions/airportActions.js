import instance from "./instance";
import * as types from "./types";

export const fetchAirports = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/airports");
      dispatch({ type: types.FETCH_AIRPORT, payload: res.data });
    } catch (error) {
      console.log("fetchAirports flightActions Error:", error);
    }
  };
};
