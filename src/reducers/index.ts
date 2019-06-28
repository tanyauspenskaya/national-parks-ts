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
      if (isUpdateAction(action)) {
        return {
          ...state,
          [action.payload]: {
            ...state[action.payload],
            isFavorite: !state[action.payload].isFavorite
          }
        };
      }
      return state;
    default:
      return state;
  }
};

function isUpdateAction(action: any): action is ActionUpdate {
  return action.type === "UPDATE";
}

const AppReducers = combineReducers({
  parks: parksReducer
});

export default AppReducers;
