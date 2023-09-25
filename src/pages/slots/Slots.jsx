import React from "react";
import CardsProductos from "../../components/productos/CardsProductos";
import { ContenedorSlots } from "./SlotStyle";

const Slots = () => {
  return (
    <ContenedorSlots>
      <CardsProductos categoria="slots" />
    </ContenedorSlots>
  );
};

export default Slots;
