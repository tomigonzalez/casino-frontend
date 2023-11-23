import React from "react";
import Button from "../../UI/button/Button";

import { Contenedorss, StyledNavLink } from "./LinkContainerButtonStyled";

const LinkContainerButton = () => {
  return (
    <Contenedorss>
      <Button width={100}>
        <StyledNavLink to="/register">REGISTER</StyledNavLink>
      </Button>

      <Button secondary="true" width={100}>
        <StyledNavLink to="/login">LOGIN</StyledNavLink>
      </Button>
    </Contenedorss>
  );
};

export default LinkContainerButton;
