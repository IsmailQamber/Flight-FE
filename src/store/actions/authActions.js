import decode from "jwt-decode";
import Cookies from "js-cookie";
import instance from "./instance";
import * as types from "../actions/types";

const setUser = (token) => {
  Cookies.set("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", newUser);
    await dispatch(setUser(res.data.token));
    // sending the token to the instance, so this will send the token everytime we trigger or use an action.
    history.replace("/");
  } catch (error) {
    console.log("signup authActions Error:", error);
  }
};

export const signin = (newData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", newData);
    const token = Cookies.set("myToken", res.data.token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    // sending the token to the instance, so this will send the token everytime we trigger or use an action.
    history.replace("/");
    dispatch(setUser(res.data.token));
  } catch (error) {
    console.log("signin authActions Error:", error);
  }
};

export const checkToken = () => (dispatch) => {
  const token = Cookies.get("myToken");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime < user.exp) {
      // checks if the token is expaired or not
      dispatch(setUser(token));
    } else {
      dispatch(logout());
    }
  }
};

export const logout = () => {
  Cookies.remove("myToken", { path: "/" }); // deletes the token from the cookie.
  delete instance.defaults.headers.common.Authorization; // deleting the token from the instance.
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const userUpdate = (updatedUser, history) => async (dispatch) => {
  try {
    const res = await instance.put("/profile", updatedUser);
    history.replace("/");
    dispatch({
      type: types.UPDATE_USER,
      payload: { updatedUser: res.data },
    });
  } catch (error) {
    console.log("userUpdate authActions Error:", error);
  }
};
