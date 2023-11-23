import { BiDownArrow } from "react-icons/bi";
import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 20px;
  width: 90%;
`;

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  & img {
  }
  @media (max-width: 1400px) {
    display: none;
  }
`;

export const LinkContainerStyled = styled.div`
  display: flex;
  color: white;
  gap: 20px;
  font-size: 14px;

  & p {
    margin: 0;
  }
  & p:hover {
    color: var(--orange);
  }
`;
export const BiDownArrowIcon = styled(BiDownArrow)`
  font-size: 80%;
  padding-left: 5px;
`;

export const StyledQuery = styled.div`
  @media (max-width: 1400px) {
    display: none;
  }
`;
export const StyledQuery2 = styled.div`
  display: none;
  @media (max-width: 1400px) {
    display: flex;
  }
`;
