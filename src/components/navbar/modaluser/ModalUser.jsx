import React from "react";
import { AnimatePresence } from "framer-motion";
import * as userActions from "../../../redux/user/user-action";
import {
  HrStyled,
  ModalContainerStyled,
  UsernameStyled,
} from "./ModelUserStyles";
import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../../../redux/cart/cart-action";
import { setCurrentUser } from "../../../redux/user/user-action";

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setCurrentUser(null));
    dispatch(userActions.toggleMenuHidden());
    localStorage.removeItem("authToken");
    dispatch(clearCart());
  };
  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
        >
          <UsernameStyled>{`Hola ${currentUser?.usuario.name}!!!`}</UsernameStyled>
          <HrStyled />
          {/* <ContenedorButton>
            <Button secondary>DEPOSITAR</Button>
            <Button secondary>RETIRAR</Button>
          </ContenedorButton> */}
          <span
            onClick={() => {
              handleLogout();

              console.log(currentUser);
            }}
          >
            {" "}
            Cerrar Sesion{" "}
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
