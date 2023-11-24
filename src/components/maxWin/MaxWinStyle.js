import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CardsContainer = styled.div`
  padding: 1rem;
  display: flex;
  place-content: center;
`;
export const SliderBigWin = styled(Slider)`
  width: 100%;
  padding: 1rem;
  display: flex;
  place-content: center;
  overflow: hidden;

  @media (max-width: 550px) {
    padding: 0.6rem;
  }
`;

export const Cards = styled.div`
  margin-right: 20px;
  place-content: SPACE-EVENLY;
  display: flex;
  border-radius: 20px;
  background-color: rgb(52, 56, 74);
  height: 100%;

  @media (max-width: 650px) {
    margin-right: 5px;
  }
`;
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
export const CardImgContain = styled.div`
  width: 100%;
`;
export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 50%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-left: 10px;

  & p {
    margin: 0;
    padding: 0;
  }
`;
export const CardId = styled.div`
  display: flex;
  font-size: 10px;
  color: white;
  gap: 5px;
  width: 220px;
`;
export const CardTitle = styled.h2`
  margin: 0;
  font-weight: 700;
  color: var(--orange);
  letter-spacing: 0.05rem;

  @media (max-width: 850px) {
    font-size: 1rem;
  }
  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;

export const CardPrice = styled.div`
  font-weight: 800;
  font-size: 1.2rem;
  color: #0ed447;

  & p {
    margin-top: 14px;

    color: white;
    font-size: 10px;
    font-weight: 100;
  }
  @media (max-width: 700px) {
    font-size: 10px;
  }
`;
