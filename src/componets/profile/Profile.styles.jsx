import { styled } from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 730px;
  display: grid;
  gap: 32px;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  box-shadow: 0px 16px 30px -10px #4660bb33;

  @media (min-width: 768px) {
    padding: 48px 32px;
  }
`;

export const ProfileHeader = styled.div`
  display: grid;
  row-gap: 10px;
  grid-template: repeat(4, auto) / 100px auto;
  grid-auto-flow: row;

  @media (min-width: 768px) {
    grid-template: repeat(4, auto) / 150px auto auto;
  }
`;

export const ProfileAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  grid-row: 1 / span 4;

  @media (min-width: 768px) {
    width: 117px;
    height: 117px;
  }
`;

export const ProfileName = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.txtPrimary};
`;

export const ProfileUsername = styled.p`
  font-size: 16px;
  color: #0079ff;

  @media (min-width: 768px) {
    grid-area: 2 / 2 / 3 / 3;
  }
`;

export const ProfileDate = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.txtSecondary};

  @media (min-width: 768px) {
    grid-area: 1 / 3 / 2 / 3;
    justify-self: end;
  }
`;

export const ProfileBio = styled.p`
  grid-column: 1 / span 2;
  margin-top: 20px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.txtSecondary};

  @media (min-width: 768px) {
    grid-column: 2 / span 3;
  }
`;

export const ProfileStats = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-left: 150px;
    width: 460px;
    background-color: ${({ theme }) => theme.colors.bgMain};
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  gap: 5px;
  font-weight: 700;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.txtPrimary};
`;

export const StatName = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.txtSecondary};
`;

export const LinkSection = styled.div`
  display: grid;
  gap: 0.5rem;

  @media (min-width: 768px) {
    margin-left: 150px;
    grid-template: repeat(2, auto) / repeat(2, auto);
  }
`;

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.txtSecondary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
