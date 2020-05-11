import { UPDATE_TEXT } from "./constants";

export const updateText = (text: string) => ({
  type: UPDATE_TEXT,
  payload: text,
});
