import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Contenedorss = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: space-around;
  gap: 2%;
`;
export const StyledNavLink = styled(NavLink)`
  @media (max-width: 700px) {
    font-size: 0.7rem;
    font-weight: bolder;
  }
`;
