import React from "react";
import { ContButton, CountentCoupons, ImgDeposito } from "./CouponsStyle";
import Button from "../UI/button/Button";
import Titles from "../UI/title/Titles";
import { useSelector } from "react-redux";

const CouponsNombre = ({ data, addToCart }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  let { id, img, category } = data;
  return (
    <CountentCoupons>
      <ImgDeposito src={img} alt={category} />
      <ContButton>
        <Titles>{category}</Titles>
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
