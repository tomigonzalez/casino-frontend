import { NavLink } from "react-router-dom";

import React from "react";
import { LinkContainerStyled } from "../NavbarStyle";

const LinkContainer = () => {
  return (
    <LinkContainerStyled>
      <NavLink to="/">
        <p>HOME</p>
      </NavLink>
      <NavLink to="/slots">
        <p>SLOTS</p>
      </NavLink>
      <NavLink to="/deportes">
        <p>DEPORTES</p>
      </NavLink>
      <NavLink to="/casino">
        <p>CASINOS EN VIVO</p>
      </NavLink>
    </LinkContainerStyled>
  );
};

export default LinkContainer;
