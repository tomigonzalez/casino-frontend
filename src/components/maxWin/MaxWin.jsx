import React from "react";
import { CardsContainer, SliderBigWin } from "./MaxWinStyle";
import { BigWin } from "../../data/BigWin";
import CardWin from "./CardWin";
import { useSelector } from "react-redux";

const MaxWin = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600000000,
    pauseOnHover: true,
  };

  const bigwins = useSelector((state) => state.bigwins.bigwins);

  return (
    <CardsContainer gridLength={BigWin.length}>
      <SliderBigWin {...settings}>
        {bigwins.map((recomendado) => (
          <CardWin key={recomendado.id} {...recomendado} />
        ))}
      </SliderBigWin>
    </CardsContainer>
  );
};

export default MaxWin;
