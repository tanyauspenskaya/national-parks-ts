import { AppData } from "../types";

export interface ActionSet {
  type: string;
  payload: AppData;
}

export interface ActionUpdate {
  type: string;
  payload: string;
}

export const setData = (data: AppData) => {
  return {
    type: "SET",
    payload: data
  };
};

export const updateData = (id: string) => {
  return {
    type: "UPDATE",
    payload: id
  };
};

// Parks (all)
// 1. SET [firebase data retrieval]
// 2. UPDATE [favourite selection]

// Search results (filtered matches)
// 1. Update [search submitted, favourite selection]

// Selected park
// 1. Update [park selected, favourite selection]
