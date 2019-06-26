// The reducer is a pure function that takes the previous state and an action, and returns the next state.
import { Action } from "../actions";
import { combineReducers } from "redux";

const parksReducer = (state: Action["payload"] = {}, action: Action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    default:
      return state;
  }
};

const AppReducers = combineReducers({
  parks: parksReducer
});

export default AppReducers;
