import React from "react";
import { useNavigate } from "react-router";

import Button from "../UI/Button/Button";
import "./products-home.scss";

const SecondProduct = React.forwardRef(({ inVieew }, ref) => {
  const navigate = useNavigate();
  const onClickHendler = () => {
    navigate("/product/zx7-speaker");
  };
  return (
    <section className={`second-product ${inVieew && "product__show"}`} ref={ref}>
      <div className="second-product__description">
        <div className="second-product__description__title">ZX7 SPEAKER</div>
        <Button className={"tird-style"} onClick={onClickHendler}>
          see product
        </Button>
      </div>
    </section>
  );
});

export default SecondProduct;
