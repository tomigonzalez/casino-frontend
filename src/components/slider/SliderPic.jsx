import React from "react";

import {
  ButtonRegisterPosition,
  ContainerImg,
  Img,
  SliderConst,
} from "./SliderPicStyle";
import Button from "../UI/button/Button";

const SliderPic = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <SliderConst {...settings}>
      <ContainerImg>
        <Img src="img/1.png" alt="deposit" />
        <ButtonRegisterPosition>
          <Button secondary="true" width={110}>
            DEPOSIT
          </Button>
        </ButtonRegisterPosition>
      </ContainerImg>

      <ContainerImg>
        <Img src="img/2.png" alt="deposit" />
        <ButtonRegisterPosition>
          <Button secondary="true" width={110}>
            DEPOSITAR
          </Button>
        </ButtonRegisterPosition>
      </ContainerImg>

      <ContainerImg>
        <Img src="img/3.png" alt="deposit" />

        <ButtonRegisterPosition>
          <Button secondary="true" width={110}>
            DEPOSITAR
          </Button>
        </ButtonRegisterPosition>
      </ContainerImg>
    </SliderConst>
  );
};

export default SliderPic;
