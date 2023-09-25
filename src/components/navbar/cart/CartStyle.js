import { BsCart4 } from "react-icons/bs";
import styled, { css } from "styled-components";

export const BsCart = styled(BsCart4)`
  cursor: pointer;
  font-size: 20px;

  ${({ invalid }) =>
    invalid &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;
