import React from "react";
import { useNavigate } from "react-router";
import "./products-home.scss";

import Button from "../UI/Button/Button";

const TirdProduct = React.forwardRef(({ inVieew }, ref) => {
  const navigate = useNavigate();
  const onClickHendler = () => {
    navigate("/product/yx1-earphones");
  };
  return (
    <section className={`tird-product  ${inVieew && "product__show"}`} ref={ref}>
      <div className="tird-product__image"></div>
      <div className="tird-product__description">
        <div className="tird-product__description__title">YX1 EARPHONES</div>
        <Button className={"tird-style"} onClick={onClickHendler}>
          see product
        </Button>
      </div>
    </section>
  );
});

export default TirdProduct;
