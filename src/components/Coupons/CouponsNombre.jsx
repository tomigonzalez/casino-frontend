import React from "react";
import {
  ContButton,
  CountentCoupons,
  ImgDeposito,
  Titles2,
} from "./CouponsStyle";
import Button from "../UI/button/Button";
import { useSelector } from "react-redux";

const CouponsNombre = ({ data, addToCart }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  let { id, img, category } = data;
  return (
    <CountentCoupons>
      <ImgDeposito src={img} alt={category} />
      <ContButton>
        <Titles2>{category}</Titles2>
        {!currentUser ? (
          <Button invalid="true" onClick={() => addToCart(id)}>
            DEPOSIT
          </Button>
        ) : (
          <Button onClick={() => addToCart(id)}>DEPOSIT</Button>
        )}
      </ContButton>
    </CountentCoupons>
  );
};

export default CouponsNombre;
