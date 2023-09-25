import React from "react";
import { ContentSection } from "./SeccionesStyle";
import Seccion from "./Seccion";
import { useSelector } from "react-redux";

const Secciones = () => {
  const seccion = useSelector((state) => state.secciones.secciones);
  return (
    <ContentSection>
      {seccion.map((producto) => {
        return <Seccion key={producto.id} {...producto} />;
      })}
    </ContentSection>
  );
};

export default Secciones;
