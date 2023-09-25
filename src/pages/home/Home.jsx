import React from "react";
import SliderPic from "../../components/slider/SliderPic";
import { ContenedorHome } from "./HomeStyle";
import MaxWin from "../../components/maxWin/MaxWin";
import Titles from "../../components/UI/title/Titles";
import CardsProductos from "../../components/productos/CardsProductos";
import Categorias from "../../components/clasificacion/Categorias";
import Secciones from "../../components/secciones/Secciones";
import { useSelector } from "react-redux";
import Coupons from "../../components/Coupons/Coupons";

const Home = () => {
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  console.log(selectedCategory);
  return (
    <ContenedorHome>
      <SliderPic />
      <Titles>
        <span>TO</span> DEPOSIT
      </Titles>
      {/* Categorias Coupons */}
      <Coupons />

      <Titles>
        <span>BIG</span> WINS
      </Titles>
      <MaxWin />

      {/* Categorias Section */}
      <Categorias />
      {/* Populares Section*/}
      <CardsProductos />
      {/*secciones*/}
      {selectedCategory === "Section" && <Secciones />}
    </ContenedorHome>
  );
};

export default Home;
