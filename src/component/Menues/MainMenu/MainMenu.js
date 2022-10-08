import React from "react";
import { useNavigate } from "react-router";
import Menu from "./Menu";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import "./main-menu.scss";
import { useState } from "react";
import Modal from "../../UI/Modal/Modal";
import SecondMenu from "../SecondMenu/SecondMenu";

const MainMenu = (props) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const onCloseHandler = () => {
    setShowMenu(false);
  };

  return (
    <div className={`main-menu ${props.className}`}>
      <div
        className={`menu-mobile-button  ${showMenu && "menu-mobile-button__close"}`}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        className="main-menu__logo"
        onClick={() => {
          navigate("/");
          setShowMenu(false);
        }}
      >
        <img src="/assets/audiophile-logo.svg" alt="Logo pic" className="main-menu__logo" />
      </div>
      <Menu />
      <div className={`main-menu__cart`}>{!props.hideCartIcon && <CartIcon />}</div>

      {showMenu && (
        <Modal onClose={onCloseHandler} className="mobile-menu-modal" classContainer="mobile-menu-container">
          <SecondMenu onCloseMobileMenu={onCloseHandler} />
        </Modal>
      )}
    </div>
  );
};

export default MainMenu;
