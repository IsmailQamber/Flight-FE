import instance from "./instance";
import decode from "jwt-decode";
import * as types from "../actions/types";
import Cookies from "js-cookie";
import { useRadioGroup } from "@material-ui/core";

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
    instance.defaults.headers.common.Authorization = `Bearer ${token}`; // sending the token to the instance, so this will send the token everytime we trigger or use an action.
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
      Cookies.get("myToken");
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

export const userUpdate = (updatedUser, user) => async (dispatch) => {
  console.log(updatedUser);
  try {
    const formData = new FormData();
    for (const key in updatedUser) formData.append(key, updatedUser[key]);
    const res = await instance.put(`/user/${user.id}`, formData);
    dispatch({
      type: types.UPDATE_USER,
      payload: { updatedUser: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
