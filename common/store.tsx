import React, { ReactChild, useReducer } from "react";
import { UPDATE_TEXT } from "./constants";

export const STARTING_TEXT = "Helloo!!";

const initialState = { text: STARTING_TEXT };
const StateContext = React.createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

type ActionType = {
  type: string;
  payload: string;
};

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const StateProvider: React.FC<{ children: ReactChild }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, StateContext };
