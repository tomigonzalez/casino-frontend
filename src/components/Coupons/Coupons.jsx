import React from "react";
import { ContGeneral, ContenedorCoupons } from "./CouponsStyle";
import { useDispatch, useSelector } from "react-redux";
import CouponsNombre from "./CouponsNombre";
import { addToCart } from "../../redux/cart/cart-action";

// import { auth, getCartItems } from "../../firebase/firebase-utils";

const Coupons = () => {
  const coup = useSelector((state) => state.coupons.coupons);
  const dispatch = useDispatch();

  // const userId = auth.currentUser?.uid;

  // useEffect(() => {
  //   if (userId) {
  //     // Obtener los productos del carrito desde Firestore al iniciar sesión
  //     getCartItems(userId).then((items) => {
  //       dispatch(addToCart(items));
  //     });
  //   }
  // }, [dispatch, userId]);

  return (
    <ContGeneral>
      <ContenedorCoupons>
        {coup.map((producto) => (
          <CouponsNombre
            key={producto.id}
            data={producto}
            addToCart={() => {
              dispatch(addToCart(producto.id));
            }}
          />
        ))}
      </ContenedorCoupons>
    </ContGeneral>
  );
};

export default Coupons;
