import { useSelector } from "react-redux";

const useTotal = () => {
  const { cart } = useSelector((state) => state.cart);
  // Calcular el total de todos los productos en el carrito
  const total = cart.reduce((accumulator, item) => {
    const price = item.title;
    const quantity = item.quantity;
    return accumulator + price * quantity;
  }, 0);
  return { total };
};

export default useTotal;
