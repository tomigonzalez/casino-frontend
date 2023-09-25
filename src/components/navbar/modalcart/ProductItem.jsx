import React from "react";
import Button from "../../UI/button/Button";
import {
  ContButtons,
  ContProducto,
  NombreProducto,
  Price,
} from "./ModalCartStyle";

const ProductItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { title, category, quantity } = data;

  return (
    <ContProducto>
      <NombreProducto>{category}</NombreProducto>
      <Price>
        {" "}
        USD{title}.00 x {quantity} = ${title * quantity}.00
      </Price>

      <ContButtons>
        <Button onClick={delOneFromCart} width={100}>
          DELETE ONE
        </Button>
        <Button onClick={delAllFromCart} width={100}>
          DELETE ALL
        </Button>
      </ContButtons>
    </ContProducto>
  );
};

export default ProductItem;
