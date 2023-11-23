import styled from "styled-components";

export const ContenedorCoupons = styled.div`
  display: flex;
  flex-direction: row;
  place-content: SPACE-AROUND;
  gap: 10px;
  width: 80%;
  height: 100%;
  text-align: center;
  position: relative;
  @media (max-width: 700px) {
    width: 94%;
  }
  @media (max-width: 600px) {
    width: 94%;
    flex-wrap: wrap;
  }
`;
export const CouponsNombre = styled.div`
  width: 100px;
  height: 100px;
`;
export const ContGeneral = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
  flex-flow: row;
`;
export const ImgDeposito = styled.img`
  width: 100%;
  height: 100%;
`;

export const CountentCoupons = styled.div`
  width: 35%;
  height: 100%;
  @media (max-width: 600px) {
    position: relative;
    width: 47%;
  }
`;
export const Titles2 = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;

  font-size: 1.9rem;
  margin: 0;
  font-weight: 900;
  @media (max-width: 1400px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

export const ContButton = styled.div`
  position: ABSOLUTE;
  top: 30px;
  text-align: left;
  margin-left: 10px;

  @media (max-width: 900px) {
  }
  @media (max-width: 410px) {
  }
`;
