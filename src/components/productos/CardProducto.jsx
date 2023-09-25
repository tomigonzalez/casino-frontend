import React from "react";

import { Imag, ProductosCard } from "./CardsProductosStyle";

const CardProducto = ({ img, title, desc }) => {
  return (
    <ProductosCard>
      <Imag src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </ProductosCard>
  );
};

export default CardProducto;
