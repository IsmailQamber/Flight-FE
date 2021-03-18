import instance from "./instance";
import * as types from "./types";

export const fetchAirline = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/airlines");
      dispatch({ type: types.FETCH_AIRLINE, payload: res.data });
    } catch (error) {
      console.log("fetchAirlines airlineActions Error:", error);
    }
  };
};

//Review: I dont think we need this, remove after testing
export const addAirline = (newAirline) => async (dispatch) => {
  try {
    const res = await instance.post("/flight", newAirline);
    dispatch({
      type: types.ADD_FLIGHT,
      payload: { newAirline: res.data },
    });
  } catch (error) {
    console.log("addAirline airlineActions Error:", error);
  }
};
