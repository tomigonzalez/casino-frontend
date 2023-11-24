import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  align-items: center;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.4rem 2rem;
  color: white;
  background-color: #80808052;
  border-radius: 20px;
  border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
  outline: none;
  caret-color: white;
  font-weight: 600;
  ::placeholder {
    opacity: 80%;
  }
  -webkit-text-fill-color: white;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px rgba(120, 124, 148, 1) inset;
  }
  @media (max-width: 700px) {
    width: 230px;
    padding: 1rem 1.5rem;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
