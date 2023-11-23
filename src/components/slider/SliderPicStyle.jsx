import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderConst = styled(Slider)`
  width: 100%;
  margin: 0 auto;
  .slick-list {
    overflow: hidden;
  }
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-dots li button::before {
    font-size: 10px;
    color: #f43a3a;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;

  img {
    border-radius: 30px;
    width: 100%;
    height: auto;
  }
`;
export const ButtonRegisterPosition = styled.div`
  background: NONE;
  position: absolute;
  top: 60%;
  left: 64%;
  border: NONE;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
