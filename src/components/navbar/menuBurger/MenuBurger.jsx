import React, { useEffect } from "react";
import "./MenuBurgerStyle.css";

const MenuBurger = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      icon.addEventListener("click", (event) => {
        icon.classList.toggle("open");
      });
    });
  }, []);

  return (
    <div className="icon nav-icon-5">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuBurger;
