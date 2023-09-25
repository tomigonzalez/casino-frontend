import React, { useEffect, useState } from "react";
import CardProducto from "./CardProducto";
import {
  ButtonContPosition,
  ButtonContainerStyled,
  ProductosContainer,
} from "./CardsProductosStyle";
import { useSelector } from "react-redux";
import { INITIAL_LIMIT } from "../../data/Constante";
import Button from "../UI/button/Button";

const CardsProductos = ({ categoria }) => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const machine = useSelector((state) => state.machine.machine);

  let selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  let productsToRender = [];

  if (selectedCategory) {
    productsToRender = machine.filter(
      (producto) => producto.category === selectedCategory
    );
  } else {
    // Si no hay categoría seleccionada, se renderizan todos los productos de machine
    productsToRender = machine;
  }

  if (categoria) {
    selectedCategory = null;
    productsToRender = machine.filter(
      (producto) => producto.category1 === categoria
    );
  }

  useEffect(() => {
    setLimit(INITIAL_LIMIT); // Ejecuta la acción "reset" para reiniciar el estado de la máquina
  }, [selectedCategory]);

  return (
    <>
      <ProductosContainer>
        {productsToRender.map((producto) => {
          if (selectedCategory || productsToRender.indexOf(producto) <= limit) {
            return <CardProducto key={producto.id} {...producto} />;
          }
          return null;
        })}
      </ProductosContainer>

      {selectedCategory === null && (
        <ButtonContPosition>
          <ButtonContainerStyled>
            <Button
              width={100}
              disabled={limit === INITIAL_LIMIT}
              onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
            >
              ver menos
            </Button>
            <Button
              secondary="true"
              width={100}
              disabled={productsToRender.length <= limit}
              onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
            >
              ver mas
            </Button>
          </ButtonContainerStyled>
        </ButtonContPosition>
      )}
    </>
  );
};

export default CardsProductos;
