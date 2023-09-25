import styled from "styled-components";

export const ContentSection = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  gap: 5rem;
  padding: 3rem;
`;

export const SeccionConteiner = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
  background-color: rgb(52, 56, 74);
  border-radius: 30px;
  width: 300px;
  height: 190px;
  text-align: center;

  h2 {
    font-weight: 900;
    margin: 0px;
    font-size: 1.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: var(--orange);
    padding-right: 11px;
  }
`;

export const ContainImg = styled.div`
  align-self: FLEX-END;
  width: 230px;
  height: 240px;
`;
export const SeccionImg = styled.img`
  width: 100%;
  height: 100%;
`;
