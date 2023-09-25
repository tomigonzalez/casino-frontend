import React from "react";
import { Link } from "react-router-dom";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

import {
  ContenedorSocial,
  DecorationContainer,
  FooterContainerStyled,
  Herradura,
  LinksContainerStyled,
  LinksContenedor,
  Logo,
  Pcontenedor,
  Seven,
  SocialIcon,
  Trebol,
} from "./FooterStyle";

const Footer = () => {
  return (
    <FooterContainerStyled>
      <DecorationContainer>
        {/* <Seven src="img/slots/siete.png" alt="siete"></Seven>
        <Herradura src="img/slots/herradura.png" alt="herradura"></Herradura>
        <Trebol src="img/slots/trebol.png" alt="trebol"></Trebol> */}
      </DecorationContainer>
      <LinksContainerStyled className="links">
        <LinksContenedor>
          <Link to="/" style={{ fontWeight: "bold" }}>
            OUR POLICIES{" "}
          </Link>
          <Pcontenedor>
            <p>TERMS OF SERVICES </p>
            <p>PRIVACY POLICY </p>
            <p>REFUND POLICY </p>
            <p>GAME POLICY </p>
            <p>PAYMENT POLICY </p>
            <p>BONUS AND PROMOTION POLICY </p>
            <p>RESPONSIBLE GAMBLING </p>
            <p>SPORTSBOOKS POLICY</p>
            <p>KYC-AML-CFT POLICY</p>
          </Pcontenedor>
        </LinksContenedor>

        <LinksContenedor>
          <Link to="/" style={{ fontWeight: "bold" }}>
            OTHERS LINKS
          </Link>
          <Pcontenedor>
            <p>TERMS OF SERVICES </p>
            <p>PRIVACY POLICY </p>
            <p>REFUND POLICY </p>
            <p>GAME POLICY </p>
            <p>PAYMENT POLICY </p>
            <p>BONUS AND PROMOTION POLICY </p>
            <p>RESPONSIBLE GAMBLING </p>
            <p>SPORTSBOOKS POLICY</p>
            <p>KYC-AML-CFT POLICY</p>
          </Pcontenedor>
        </LinksContenedor>
      </LinksContainerStyled>
      <Logo>
        <img src="img/logo.png" alt="logo" />
      </Logo>
      <ContenedorSocial>
        <SocialIcon>
          <SlSocialFacebook />
        </SocialIcon>
        <SocialIcon>
          <SlSocialTwitter />
        </SocialIcon>
        <SocialIcon>
          <SlSocialLinkedin />
        </SocialIcon>
        <SocialIcon>
          <SlSocialInstagram />
        </SocialIcon>
      </ContenedorSocial>
    </FooterContainerStyled>
  );
};

export default Footer;
