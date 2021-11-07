import { ThemeAction } from "../actions/theme.actions";

export const SET_DARK_MODE = "SET_DARK_MODE";
export const SET_LIGHT_MODE = "SET_LIGHT_MODE";

export default (state = false, action: ThemeAction) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      return true;
    case "SET_LIGHT_MODE":
      return false;
    default:
      return false;
  }
};
