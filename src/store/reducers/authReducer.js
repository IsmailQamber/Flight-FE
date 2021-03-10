import { SatelliteTwoTone } from "@material-ui/icons";
import * as types from "../actions/types";

const initialState = {
  user: null,
};

// REVIEW: There should be a consistency between the app and web actions and reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case types.UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload.updatedUser },
      };
    default:
      return state;
  }
};

export default reducer;
