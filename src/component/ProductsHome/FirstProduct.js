import React from "react";
import { useNavigate } from "react-router";
import Button from "../UI/Button";
import "./products-home.scss";

const FirstProduct = () => {
  const navigate = useNavigate();
  const onClickHendler = () => {
    navigate("/product/zx9-speaker");
  };

  return (
    <section className="first-product">
      <div className="first-product__image">
        <img src="assets/home/image-speaker-zx9.png" alt="" />
      </div>
      <div className="first-product__description">
        <div className="first-product__description__title">ZX9 SPEAKER</div>
        <div className="first-product__description__text">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </div>
        <Button className={"button-second-style"} onClick={onClickHendler}>
          see product
        </Button>
      </div>
    </section>
  );
};

export default FirstProduct;
