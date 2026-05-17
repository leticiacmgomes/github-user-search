import { styled } from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Space Mono", monospace;
  min-height: 100vh;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.bgMain};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
`;
