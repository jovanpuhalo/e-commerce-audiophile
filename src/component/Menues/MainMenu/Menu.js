import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

import { NavLink } from "react-router-dom";

let activeStyle = {
  color: "var(--color-pry-1)",
};

const Menu = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(cartActions.setCartIsOpen(false));
  };

  return (
    <nav className="main-menu__menu">
      <ul>
        <li>
          <NavLink to={"/"} end style={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={onClickHandler}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/headphones"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={onClickHandler}
          >
            Headphones
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/speakers"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={onClickHandler}
          >
            Speakers
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/earphones"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={onClickHandler}
          >
            Earphones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
