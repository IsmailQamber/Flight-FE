import * as types from "../actions/types";

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
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
