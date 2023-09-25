import React from "react";
import { ContainImg, SeccionConteiner, SeccionImg } from "./SeccionesStyle";

const Seccion = ({ title, id, img }) => {
  return (
    <SeccionConteiner>
      <ContainImg>
        <SeccionImg src={img} />
      </ContainImg>
      <h2>{title}</h2>
    </SeccionConteiner>
  );
};

export default Seccion;
