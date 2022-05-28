import { palette, codearis, apple, smartcst } from "./colors";

export const lightTheme = {
  name: "light",
  colors: {
    background: apple.container,
    foreground: apple.light_foreground,
    secondary: apple.light_icon,
    container: apple.light_container,
    containerSecondary: apple.light_containerDark,
    inputBackground: apple.light_input_container,
    primary: smartcst.blue,
    primaryDark: codearis.cyan,
    accent: smartcst.red,
    accentDark: codearis.green,
    success: palette.green,
    danger: palette.orange,
    failure: palette.red,
  },
};

export const darkTheme = {
  name: "dark",
  colors: {
    ...lightTheme.colors,
    primary: smartcst.blue,
    primaryDark: codearis.cyan,
    accent: smartcst.red,
    accentDark: codearis.green,
    background: apple.dark_background,
    foreground: apple.dark_foreground,
    secondary: apple.dark_icon,
    container: apple.dark_container,
    containerSecondary: apple.dark_containerLight,
    inputBackground: apple.dark_input_container,
  },
  text: { ...lightTheme.text },
};
