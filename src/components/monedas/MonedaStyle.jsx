import styled from "styled-components";
import { BsGlobe } from "react-icons/bs";

export const ContenedorMonedas = styled.header`
  height: 50px;
  display: flex;
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
`;

export const StyledIcon = styled(BsGlobe)`
  color: white;
  font-size: 1rem;
  align-self: center;
`;
