import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 0 2rem 0;
  p span {
    font-weight: 800;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  & img {
  }
`;

export const Pcontenedor = styled.div`
  display: flex;
  flex-flow: column;

  & p {
    margin: 0;
    padding: 0;
    color: white;
    font-size: 0.7rem;
    font-weight: 700;
    cursor: pointer;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;
export const LinksContenedor = styled.div`
  display: flex;
  flex-flow: column;
`;

export const LinksContainerStyled = styled.div`
  justify-content: space-evenly;
  width: 50%;
  margin-bottom: 2rem;
  display: flex;
  flex-flow: row;
`;

export const DecorationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;
export const Seven = styled.img`
  position: relative;
`;
export const Herradura = styled.img`
  position: relative;
  top: 29%;
  left: 66%;
`;
export const Trebol = styled.img`
  position: relative;
  top: -54%;
  left: 100%;
`;
export const ContenedorSocial = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 20px;
`;
export const SocialIcon = styled.div`
  color: white;
  cursor: pointer;
  &:hover {
    color: var(--orange);
  }
`;
