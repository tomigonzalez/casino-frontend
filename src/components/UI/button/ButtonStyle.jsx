import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const StyledButton = styled(motion.button)`
  cursor: pointer;
  border-radius: 20px;
  height: 35px;
  color: white;
  background: none;
  border: 2px solid #f15a59;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;

  &:hover {
    opacity: 80%;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: #f15a59;
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
    ${({ invalid }) =>
    invalid &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;
