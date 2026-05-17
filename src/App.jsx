import { AppContainer } from "./App.styles";
import { Header } from "./componets/header/Header";
import { Search } from "./componets/search/Search";
import { Profile } from "./componets/profile/Profile";
import { NoResults } from "./componets/noresults/NoResults";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import { darkTheme } from "./theme/theme";
import { useThemeStore } from "./store/themeStore";
import { useStore } from "./store/store";

export const App = () => {
  const { isDarkTheme } = useThemeStore();
  const { profileData, error } = useStore();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppContainer>
        <Header />
        <Search />
        {profileData && <Profile />}
        {!profileData && error && <NoResults />}
      </AppContainer>
    </ThemeProvider>
  );
};
