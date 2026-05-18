import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 730px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.txtPrimary};
`;

export const ToggleTheme = styled.button`
  width: 72px;
  height: 20px;
  background-image: url("${({ theme }) => theme.images.bgToggleTheme}");
  background-repeat: no-repeat;
  background-position: right center;
  background-color: transparent;
  text-align: left;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.txtSecondary};
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
