import { darkColors } from "../../theme/colors";

export type ToggleTheme = {
  handleBackground: string;
};

export const light: ToggleTheme = {
  handleBackground: "#000",
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
};
