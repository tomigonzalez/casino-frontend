import React from "react";

import CategoriasNombre from "./CategoriasNombre";
import { ContenedorCategorias } from "./CategoriasStyle";
import { useSelector } from "react-redux";

const Categorias = () => {
  const cat = useSelector((state) => state.categories.categories);
  return (
    <ContenedorCategorias>
      {cat.map((producto) => (
        <CategoriasNombre key={producto.id} {...producto} />
      ))}
    </ContenedorCategorias>
  );
};

export default Categorias;
