import React from "react";
import { Nombre, Posicion } from "./CategoriasStyle";
import { useDispatch, useSelector } from "react-redux";
import * as categoriesActions from "../../redux/categories/categories-action";

const CategoriasNombre = ({ title, category }) => {
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();

  return (
    <Posicion>
      <Nombre
        selected={category === selectedCategory}
        onClick={() => dispatch(categoriesActions.selectCategory(category))}
      >
        {title}
      </Nombre>
    </Posicion>
  );
};

export default CategoriasNombre;
