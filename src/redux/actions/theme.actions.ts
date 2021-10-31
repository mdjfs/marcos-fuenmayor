export interface ThemeAction {
  type: "SET_DARK_MODE" | "SET_LIGHT_MODE";
}

export const setTheme = (dark: boolean) => {
  if (dark)
    return {
      type: "SET_DARK_MODE",
    };
  else
    return {
      type: "SET_LIGHT_MODE",
    };
};
