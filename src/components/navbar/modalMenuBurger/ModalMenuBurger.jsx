import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const ModalMenuBurger = ({ isOpen, handleClick }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      window.scrollTo(0, 0); // Lleva la página al principio
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  return (
    <NavContainer className={` ${isOpen ? "active" : ""}`}>
      <DivPosition>
        <NavLink to="/">
          {" "}
          <a onClick={handleClick} href="#h">
            Home
          </a>
        </NavLink>

        <NavLink to="/slots">
          {" "}
          <a onClick={handleClick} href="#h">
            Slots
          </a>
        </NavLink>

        <NavLink to="/deportes">
          <a onClick={handleClick} href="#h">
            Deportes
          </a>
        </NavLink>

        <NavLink to="/casino">
          {" "}
          <a onClick={handleClick} href="#h">
            Casinos en vivo
          </a>
        </NavLink>
      </DivPosition>
      <div className="burguer"></div>
    </NavContainer>
  );
};

export default ModalMenuBurger;
const DivPosition = styled.div`
  display: contents;
`;
const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  display: none;
  flex-flow: column;
  z-index: 50;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: -100%;
  background-color: rgb(24, 26, 39);

  align-items: center;
  justify-content: space-between;
  transition: all 0.6s;
  a {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: white;
  }

  a:hover {
    color: rgb(241, 90, 89);
  }
  &.active {
    top: 10%;
  }

  @media (max-width: 1400px) {
    display: flex;
  }
`;
