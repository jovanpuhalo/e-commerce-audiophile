import React from "react";
import "./top-button.scss";

const TopButton = () => {
  const clikcHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="top-button" onClick={clikcHandler}>
      <div className="top-button__arrow"></div>
    </div>
  );
};

export default TopButton;
