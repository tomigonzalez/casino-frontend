import React from "react";
import { ContenedorSlots } from "./CasinoVivoStyle";
import CardsProductos from "../../components/productos/CardsProductos";

const CasinoVivo = () => {
  return (
    <ContenedorSlots>
      <CardsProductos categoria="online" />
    </ContenedorSlots>
  );
};

export default CasinoVivo;
