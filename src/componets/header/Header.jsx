import { useThemeStore } from "../../store/themeStore";

import { HeaderContainer, Title, ToggleTheme } from "./Header.styles";

export const Header = () => {
  const { isDarkTheme, toggleTheme } = useThemeStore();

  return (
    <HeaderContainer>
      <Title>devfinder</Title>
      <ToggleTheme onClick={toggleTheme}>
        {isDarkTheme ? "light" : "dark"}
      </ToggleTheme>
    </HeaderContainer>
  );
};
