import instance from "./instance";
import * as types from "./types";

export const fetchFlights = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights");
      dispatch({ type: types.FETCH_FLIGHT, payload: res.data });
    } catch (error) {
      console.log("fetchFlights flightActions Error:", error);
    }
  };
};

export const addFlight = (newFlight) => async (dispatch) => {
  try {
    const res = await instance.post("/flights", newFlight);

    dispatch({
      type: types.ADD_FLIGHT,
      payload: { newFlight: res.data },
    });
  } catch (error) {
    console.log("addFlight flightActions Error:", error);
  }
};

export const deleteFlight = (flightId) => async (dispatch) => {
  try {
    await instance.delete(`/flight/${flightId}`);
    dispatch({ type: types.REMOVE_FLIGHT, payload: { flightId: flightId } });
  } catch (error) {
    console.log("deleteFlight flightActions Error:", error);
  }
};

export const updateFlight = (updatedFlight) => async (dispatch) => {
  try {
    const res = await instance.put(
      `/flights/${updatedFlight.flightId}`,
      updatedFlight
    );
    dispatch({
      type: types.UPDATE_FLIGHT,
      payload: { updatedFlight: res.data },
    });
  } catch (error) {
    console.log("updateId", updatedFlight.flightId);
    console.log("updateFlight flightActions Error:", error);
  }
};
