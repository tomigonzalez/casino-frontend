import React from "react";
import Button from "../../UI/button/Button";

import { Contenedorss, StyledNavLink } from "./LinkContainerButtonStyled";

const LinkContainerButton = ({ isOpen, handleClick }) => {
  const handleClickRegister = () => {
    // Verifica si el menú está abierto antes de cerrarlo al hacer clic en "REGISTER"
    if (isOpen) {
      handleClick(); // Cierra el menú si está abierto
    }
  };
  return (
    <Contenedorss>
      <Button width={100}>
        <StyledNavLink to="/register" onClick={handleClickRegister}>
          REGISTER
        </StyledNavLink>
      </Button>

      <Button secondary="true" width={100}>
        <StyledNavLink to="/login" onClick={handleClickRegister}>
          LOGIN
        </StyledNavLink>
      </Button>
    </Contenedorss>
  );
};

export default LinkContainerButton;
