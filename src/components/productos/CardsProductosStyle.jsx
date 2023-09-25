import styled from "styled-components";

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 1rem;
  padding: 1rem;
`;

export const ProductosCard = styled.div`
  background: var(--gray-bg);
  width: 300px;
  text-align: center;

  h2 {
    font-weight: 900;
    margin: 0;
    font-size: 0.9rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
  }
`;

export const Imag = styled.img`
  border-radius: 30px;
  width: 70%;
  max-height: 150px;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;

export const ButtonContPosition = styled.div`
  display: FLEX;
  place-content: CENTER;
  width: 100%;
`;
