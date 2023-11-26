import { AnimatePresence } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContButtons,
  ModalContainerStyleds,
  ProductsCart,
} from "./ModalCartStyle";

import Button from "../../UI/button/Button";
import { clearCart, delFromCart } from "../../../redux/cart/cart-action";
import ProductItem from "./ProductItem";
import Titles from "../../UI/title/Titles";
import useTotal from "../../../hooks/useTotal";
import { backendUrl } from "../../../apiConfig";
import axios from "axios";
import { setCurrentUser } from "../../../redux/user/user-action";
import { useEffect } from "react";
// import { auth, handleAddToCart } from "../../../firebase/firebase-utils";

const ModalCart = () => {
  const { hiddenMenu, cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { total } = useTotal();
  const currentUser = useSelector((state) => state.user.currentUser);

  const confirmation = window.confirm("Seguro que queres realizar la compra ?");

  const handleAddToCartClick = async () => {
    if (confirmation) {
      try {
        const authToken = localStorage.getItem("authToken");
        // Realiza una solicitud al backend para comprar un cupón
        const response = await axios.post(
          `${backendUrl}/casino/comprar-cupon`,
          {
            couponValue:
              total /* Valor del cupón seleccionado desde tu carrito */,
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        // Maneja la respuesta del servidor
        if (response.status === 200) {
          // console.log("ASDASD: ", response.data.newBalance);
          window.location.reload();
          dispatch(
            setCurrentUser({
              ...currentUser,
              usuario: {
                ...currentUser.usuario,
                balance: response.data.newBalance,
              },
            })
          );

          dispatch(clearCart());
        }
      } catch (error) {
        console.error("Error al comprar el cupón:", error.response);

        // Maneja el error de compra, muestra un mensaje de error si es necesario
      }
    }
  };
  useEffect(() => {
    window.confirmation = null;
  }, []);

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyleds
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <Titles>
            <span>CART</span>
          </Titles>

          {cart.length > 0 ? (
            <ProductsCart>
              {cart.map((item, index) => (
                <ProductItem
                  key={index}
                  data={item}
                  delOneFromCart={() => dispatch(delFromCart(item.id))}
                  delAllFromCart={() => dispatch(delFromCart(item.id, true))}
                />
              ))}
            </ProductsCart>
          ) : (
            <p>No items in cart</p>
          )}

          <p>Total USD: {total}</p>
          <ContButtons>
            {<Button onClick={handleAddToCartClick}>ADD</Button>}
            <Button secondary="true" onClick={() => dispatch(clearCart())}>
              DELETE
            </Button>
          </ContButtons>
        </ModalContainerStyleds>
      )}
    </AnimatePresence>
  );
};

export default ModalCart;
