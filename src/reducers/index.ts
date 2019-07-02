import { ActionSet, ActionUpdate } from "../actions";
import { combineReducers, AnyAction } from "redux";
import { AppData } from "../types";

const parksReducer = (
  state: AppData = {},
  action: ActionSet | ActionUpdate | AnyAction
) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "UPDATE":
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          isFavorite: !state[action.payload].isFavorite
        }
      };
    default:
      return state;
  }
};

const AppReducers = combineReducers({
  parks: parksReducer
});

export default AppReducers;
