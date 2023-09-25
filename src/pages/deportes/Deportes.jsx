import React from "react";
import { ContenedorSlots } from "../slots/SlotStyle";
import CardsProductos from "../../components/productos/CardsProductos";

const Deportes = () => {
  return (
    <ContenedorSlots>
      <CardsProductos categoria="deportes" />
    </ContenedorSlots>
  );
};

export default Deportes;
