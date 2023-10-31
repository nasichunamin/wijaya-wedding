import * as types from "./constants.js";

// const initialState = {
//   user: null,
// };

export function user(state = null, action) {
  if (action.type === types.SET_USER) {
    return action.payload;
  }

  return state;
}
