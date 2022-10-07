import React from "react";
import { NavLink } from "react-router-dom";
import "./second-menu.scss";

const MenuItem = ({ url, name, path, closeMobileMenu }) => {
  return (
    <NavLink to={path} className="menu-item" onClick={closeMobileMenu}>
      <div className="menu-item__img">
        <img className="picture" src={url} alt="" />
        <div className="menu-item__shadow">
          <img src="/assets/Second menu/shadow.png" alt="" />
        </div>
      </div>
      <div className="menu-item__name">{name}</div>
      <span>shop</span>
    </NavLink>
  );
};

export default MenuItem;
