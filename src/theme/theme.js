import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

export const lightTheme = {
  colors: {
    bgMain: "#F6F8FF",
    bgSecondary: "#FFFFFF",
    txtPrimary: "#141D2F",
    txtSecondary: "#4B6A9B",
  },
  images: {
    bgToggleTheme: iconMoon,
  },
};

export const darkTheme = {
  colors: {
    bgMain: "#141D2F",
    bgSecondary: "#1E2A47",
    txtPrimary: "#FFFFFF",
    txtSecondary: "#FFFFFF",
  },
  images: {
    bgToggleTheme: iconSun,
  },
};
