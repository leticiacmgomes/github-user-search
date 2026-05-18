import { styled } from "styled-components";
import iconSearch from "../../assets/icon-search.svg";

export const SearchContainer = styled.div`
  width: 100%;
  height: 69px;
  max-width: 730px;
  position: relative;
  border-radius: 16px;
  box-shadow: 0px 16px 30px -10px #4660bb33;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-image: url("${iconSearch}");
  background-repeat: no-repeat;
  background-position: 16px center;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: none;
  border-radius: 16px;
  padding: 12px 8px 12px 50px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.txtSecondary};

  &:focus {
    outline: none;
    box-shadow:
      0px 0px 0px 3px #f6f8ff,
      0px 0px 0px 5px #0079ff,
      0px 16px 30px -10px #4660bb33;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  width: 99px;
  height: 48px;
  border-radius: 10px;
  border: none;
  padding: 12px 20px;
  background-color: #0079ff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    box-shadow:
      0px 0px 0px 2px #ffffff,
      0px 0px 0px 4px #0079ff;
    background-color: #60abff;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #f74646;
  position: absolute;
  right: 1rem;
  top: 130%;
  transition: all 0.3s ease;

  @media screen and (min-width: 768px) {
    right: 10rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
