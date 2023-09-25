import { secciones } from "../../data/Clases";

const INITIAL_STATE = {
  secciones: secciones,
};

const seccionesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default seccionesReducer;
