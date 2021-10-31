import { ThemeAction } from "../actions/theme.actions";

export default (state = false, action: ThemeAction) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      return true;
    case "SET_LIGHT_MODE":
      return false;
    default:
      return true;
  }
};
