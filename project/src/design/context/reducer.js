import { lightTheme, darkTheme } from "../themes";

export const ACTIONS = {
  SET_THEME: "set_theme",
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "initial":
      return action.value;
    case ACTIONS.SET_THEME:
      return state.name === "light"
        ? (state = lightTheme)
        : (state = darkTheme);
    default:
      return state;
  }
};
