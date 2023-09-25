import React, { useEffect } from "react";
import { LinkContainerStyled } from "../NavbarStyle";
import { BsCart } from "./CartStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  toggleOtherMenuHidden,
} from "../../../redux/cart/cart-action";
// import { auth, getCartItems } from "../../../firebase/firebase-utils";

const Cart = ({ invalid }) => {
  const { hiddenMenu } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hiddenMenu) {
      dispatch(toggleOtherMenuHidden());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  // const userId = auth.currentUser?.uid;

  // useEffect(() => {
  // if (userId) {
  // Obtener los productos del carrito desde Firestore al iniciar sesión
  // getCartItems(userId).then((items) => {
  //   // Verifica que se hayan recuperado los productos correctamente
  //   items.map((item) => dispatch(addToCart(item.id))); // Obtén un array de los IDs de los productos
  //   // Pasa los IDs a la función addToCart
  // });
  // }
  // }, [dispatch, userId]);

  return (
    <LinkContainerStyled>
      <BsCart
        invalido={invalid}
        onClick={() => dispatch(toggleOtherMenuHidden())}
      ></BsCart>
    </LinkContainerStyled>
  );
};

export default Cart;
