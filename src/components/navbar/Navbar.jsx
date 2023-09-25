import React from "react";
import {
  NavbarContainerStyled,
  LogoStyled,
  LinkContainerStyled,
  BiDownArrowIcon,
} from "./NavbarStyle";
import { useNavigate } from "react-router-dom";
import Monedas from "../monedas/Monedas";
import * as userAction from "../../redux/user/user-action";
import LinkContainer from "./linkcontainer/LinkContainer";
import { useDispatch, useSelector } from "react-redux";
import LinkContainerButton from "./linkcontainerbutton/LinkContainerButton";
import Button from "../UI/button/Button";
import ModalUser from "./modaluser/ModalUser";
import Cart from "./cart/Cart";
import ModalCart from "./modalcart/ModalCart";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const authToken = true;

  return (
    <>
      <NavbarContainerStyled>
        <ModalUser />
        <ModalCart />
        <LogoStyled onClick={() => navigate("/")}>
          <img src="img/logo.png" alt="logo" />
        </LogoStyled>
        <LinkContainer></LinkContainer>

        <LinkContainerStyled>
          <Monedas></Monedas>
        </LinkContainerStyled>

        {authToken ? <Cart /> : <Cart invalid />}

        <LinkContainerStyled>
          {currentUser ? (
            <Button
              width={100}
              onClick={() => {
                dispatch(userAction.toggleMenuHidden());
              }}
            >
              {currentUser?.usuario.name}
              <BiDownArrowIcon />
            </Button>
          ) : (
            <LinkContainerButton />
          )}
        </LinkContainerStyled>
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;
