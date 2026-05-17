import { NoResultsContainer, NoResultsMessage } from "./NoResults.styles";
export const NoResults = () => {
  return (
    <NoResultsContainer>
      <NoResultsMessage>No results found</NoResultsMessage>
      We couldn’t find any GitHub users matching your search. Please
      double-check the username and try again.
    </NoResultsContainer>
  );
};
