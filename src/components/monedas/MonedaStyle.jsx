import styled from "styled-components";
import { BsGlobe } from "react-icons/bs";

export const ContenedorMonedas = styled.header`
  height: 50px;
  display: flex;
  @media (max-width: 700px) {
    height: 30px;
  }
`;

export const Select = styled.select`
  color: WHITE;
  background: none;
  border: none;
  font-size: 0.9rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
  option {
    color: #000000;
  }

  &:focus {
    outline: none;
  }
  @media (max-width: 700px) {
    font-size: 0.6rem;
  }
`;

export const Input = styled.input`
  align-self: CENTER;
  height: 30px;
  border-radius: 20px;
  background: #06132e;
  border: #f15a59 1px solid;
  color: rgb(255, 255, 255);
  width: 60%;
  padding-left: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:focus {
    outline: none;
  }
  @media (max-width: 700px) {
    height: 20px;
    max-width: 40%;
    min-width: 40%;
  }
`;

export const StyledIcon = styled(BsGlobe)`
  color: white;
  font-size: 1rem;
  align-self: center;

  @media (max-width: 700px) {
    display: none;
  }
`;
