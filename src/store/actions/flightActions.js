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

export const addFlight = (newFlight) => async (dispatch) => {
  try {
    const res = await instance.post("/flight", newFlight);
    dispatch({
      type: types.ADD_FLIGHT,
      payload: { newFlight: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFlight = (flightId) => async (dispatch) => {
  try {
    await instance.delete(`/flight/${flightId}`);
    dispatch({ type: types.REMOVE_FLIGHT, payload: { flightId: flightId } });
  } catch (error) {
    console.log(error);
  }
};

export const updateFlight = (updatedFlight) => async (dispatch) => {
  try {
    const res = await instance.put(
      `/flight/${updatedFlight.id}`,
      updatedFlight
    );

    dispatch({
      type: types.UPDATE_FLIGHT,
      payload: { updatedFlight: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};
