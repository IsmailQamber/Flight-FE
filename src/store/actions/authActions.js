import instance from "./instance";
import decode from "jwt-decode";
import * as types from "../actions/types";
import Cookies from "js-cookie";
import { useRadioGroup } from "@material-ui/core";

// REVIEW: Add a `setUser` function to cleanup your code

export const signup = (newUser, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", newUser);
    const token = Cookies.set("myToken", res.data.token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`; // sending the token to the instance, so this will send the token everytime we trigger or use an action.
    console.log(token);
    history.replace("/");
    dispatch({
      type: types.SET_USER,
      payload: decode(res.data.token),
    });
  } catch (error) {
    console.log(error);
  }
};

export const signin = (newData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", newData);
    const token = Cookies.set("myToken", res.data.token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    // sending the token to the instance, so this will send the token everytime we trigger or use an action.
    console.log(token);
    history.replace("/");
    dispatch({
      type: types.SET_USER,
      payload: decode(res.data.token),
    });
  } catch {
    console.log("Something went wrong");
  }
};

export const checkToken = () => (dispatch) => {
  const token = Cookies.get("myToken");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime < user.exp) {
      // checks if the token is expaired or not
      Cookies.get("myToken"); //REVIEW: why?
      dispatch({
        type: types.SET_USER,
        payload: user,
      });
    } else {
      dispatch(logout(user));
    }
  }
};

export const logout = (user) => {
  Cookies.remove("myToken", { path: "/" }); // deletes the token from the cookie.
  delete instance.defaults.headers.common.Authorization; // deleting the token from the instance.
  return {
    type: types.LOGOUT,
    payload: { user },
  };
};

export const userUpdate = (updatedUser, history) => async (dispatch) => {
  console.log(updatedUser);
  try {
    const res = await instance.put("/profile", updatedUser);
    history.replace("/");
    dispatch({
      type: types.UPDATE_USER,
      payload: { updatedUser: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
