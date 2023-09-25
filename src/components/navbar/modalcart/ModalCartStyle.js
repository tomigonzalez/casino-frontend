import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalContainerStyleds = styled(motion.div)`
  position: absolute;
  background-color: #000000cc;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 350px;
  height: 500px;
  top: 100px;
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;

  display: FLEX;
  flex-flow: COLUMN;
  align-items: center;
  & p {
    color: white;
  }
  & span {
    color: var(--orange);
  }
`;

export const ProductsCart = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;
  width: 80%;
  height: 60%;
  overflow-y: scroll;
  scrollbar-width: 12px;
  scrollbar-color: red transparent;

  &::-webkit-scrollbar {
    width: 12px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--orange);
    border-radius: 4px;
  }
`;

export const ContProducto = styled.div`
  gap: 10px;
  height: 50%;
  display: flex;
  flex-flow: column;
  text-align: center;
  margin: 2%;
  border-radius: 20px;
  border: 1px solid var(--orange);

  & p {
    font-size: 12px;
  }
`;

export const NombreProducto = styled.p``;

export const Price = styled.p``;

export const ContButtons = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`;
