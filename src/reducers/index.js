import React from "react";
export const ContextApp = React.createContext();

export const initialState = {
  select: 0,
  input1: "",
  input2: "",
  input3: "",
  input4: "",
  input5: "",
  input6: "",
  input7: "",
  textarea: "",
};

export const indexReducer = (state, payload) => {
  return {
    ...state,
    ...payload,
  };
};
