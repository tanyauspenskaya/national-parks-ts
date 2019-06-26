import { Park } from "../types";

export interface Action {
  type: string;
  payload: { [key: string]: Park };
}

export const setData = (data: { [key: string]: Park }) => {
  return {
    type: "SET",
    payload: data
  };
};

// Parks (all)
// 1. SET [firebase data retrieval]
// 2. UPDATE [favourite selection]

// Search results (filtered matches)
// 1. Update [search submitted, favourite selection]

// Selected park
// 1. Update [park selected, favourite selection]
