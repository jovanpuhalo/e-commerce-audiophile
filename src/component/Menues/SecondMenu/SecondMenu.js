import React from "react";
import MenuItem from "./MenuItem";
import "./second-menu.scss";

const items = [
  { url: "/assets/Second menu/headphones.png", name: "headphones", path: "/headphones" },
  { url: "/assets/Second menu/speakers.png", name: "speakers", path: "/speakers" },
  { url: "/assets/Second menu/earphones.png", name: "earphones", path: "/earphones" },
];

const SecondMenu = (props) => {
  return (
    <nav className="second-menu">
      {items.map((item, index) => {
        return (
          <MenuItem
            key={index}
            url={item.url}
            name={item.name}
            path={item.path}
            closeMobileMenu={props.onCloseMobileMenu}
          />
        );
      })}
    </nav>
  );
};

export default SecondMenu;
