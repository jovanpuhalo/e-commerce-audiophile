import React, { memo } from "react";
import MenuItem from "./MenuItem";
import "./second-menu.scss";
import { useInView } from "react-intersection-observer";
import { options } from "../../Helper/intersectionOptions";

const items = [
  { url: "/assets/Second menu/headphones.png", name: "headphones", path: "/headphones" },
  { url: "/assets/Second menu/speakers.png", name: "speakers", path: "/speakers" },
  { url: "/assets/Second menu/earphones.png", name: "earphones", path: "/earphones" },
];

const SecondMenu = (props) => {
  const { ref, inView } = useInView(options);
  return (
    <nav className={`second-menu ${inView && "product__show"}`} ref={ref} style={{ ...props.style }}>
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

export default memo(SecondMenu);
