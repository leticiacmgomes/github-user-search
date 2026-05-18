import { useStore } from "../../store/store";
import { searchUser } from "../../services/api";
import {
  SearchButton,
  SearchContainer,
  SearchInput,
  ErrorMessage,
} from "./Search.styles";

export const Search = () => {
  const { user, setUser, profileData, setProfileData, error, setError } =
    useStore();

  const handleSearch = () => {
    setProfileData(null);
    setError(null);
    searchUser(user)
      .then((data) => setProfileData(data))
      .catch((error) => setError(error.response?.data?.message));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        onKeyDown={handleEnter}
        onChange={(e) => setUser(e.target.value)}
        value={user}
        placeholder="Search GitHub username..."
      />
      <ErrorMessage>{error}</ErrorMessage>
      <SearchButton onClick={handleSearch}>search</SearchButton>
    </SearchContainer>
  );
};
