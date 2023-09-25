import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CardsContainer = styled.div`
  padding: 2rem;
  display: flex;
  place-content: center;
`;
export const SliderBigWin = styled(Slider)`
  display: flex;
  overflow: hidden;
  place-content: CENTER;
  width: 80%;
`;

export const Cards = styled.div`
  display: flex;
  height: 140px;
  border-radius: 20px;
  background-color: #34384a;
  width: 280px;
`;
export const CardImg = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 220px;

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
`;
