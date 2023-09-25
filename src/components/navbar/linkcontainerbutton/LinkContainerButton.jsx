import React from "react";
import Button from "../../UI/button/Button";
import { NavLink } from "react-router-dom";

const LinkContainerButton = () => {
  return (
    <>
      <Button width={150}>
        <NavLink to="/register">REGISTER</NavLink>
      </Button>

      <Button secondary="true" width={150}>
        <NavLink to="/login">LOGIN</NavLink>
      </Button>
    </>
  );
};

export default LinkContainerButton;
