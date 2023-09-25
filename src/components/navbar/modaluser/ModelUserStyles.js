import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: #000000cc;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 250px;
  top: 100px;
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;

  & span {
    display: flex;
    margin-top: 20px;
    cursor: pointer;
    color: white;

    &:hover {
      opacity: 90%;
    }
  }
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
  color: var(--orange);
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;
export const ContenedorButton = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
