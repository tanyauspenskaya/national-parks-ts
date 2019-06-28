import { ActionSet, ActionUpdate } from "../actions";
import { combineReducers, AnyAction } from "redux";
import { AppData } from "../types";

const parksReducer = (
  state: AppData = {},
  action: ActionSet | ActionUpdate | AnyAction
) => {
  switch (action.type) {
    case "SET":
      console.log(action.payload);
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

const AppReducers = combineReducers({
  parks: parksReducer
});

function isUpdateAction(action: any): action is ActionUpdate {
  return action.type === "UPDATE";
}

export default AppReducers;
