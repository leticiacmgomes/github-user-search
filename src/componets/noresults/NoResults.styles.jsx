import { styled } from "styled-components";

export const NoResultsContainer = styled.div`
  width: 100%;
  max-width: 730px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 15px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.txtSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 3rem;
  margin-top: 3rem;
`;

export const NoResultsMessage = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.txtPrimary};
`;
