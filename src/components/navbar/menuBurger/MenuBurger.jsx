import React from "react";
import "./MenuBurgerStyle.css";

const MenuBurger = ({ isOpen, handleClick }) => {
  return (
    <div
      className={`icon nav-icon-5 ${isOpen ? "open" : ""}`}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuBurger;
