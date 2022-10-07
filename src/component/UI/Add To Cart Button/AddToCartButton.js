import React from "react";

import { useState } from "react";
import Button from "../Button";
import "./add-to-cart-button.scss";

const AddToCartButton = ({ addToCartHandler, removeToCartHandler }) => {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    quantity > 1 && setQuantity((prevState) => prevState - 1);
  };
  const incrementQuantity = () => {
    quantity < 5 && setQuantity((prevState) => prevState + 1);
  };
  return (
    <form className="quantity-box">
      <div className="quantity-box__quantity">
        <div className="quantity-box__quantity__minus" onClick={decrementQuantity}>
          -
        </div>
        <div className="quantity-box__quantity__input">
          <input type="number" readOnly value={quantity} />
        </div>
        <div className="quantity-box__quantity__plus" onClick={incrementQuantity}>
          +
        </div>
      </div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          addToCartHandler(quantity);
          setQuantity(1);
        }}
      >
        Add to cart
      </Button>
    </form>
  );
};

export default AddToCartButton;
