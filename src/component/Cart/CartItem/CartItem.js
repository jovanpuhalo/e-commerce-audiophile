import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { formatPrice } from "../../Helper/HelperFunctions";
import { useSelector } from "react-redux";

import "./cart-item.scss";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartIsOpen = useSelector((state) => state.cart.cartIsOpen);

  const addProductHandler = () => {
    dispatch(cartActions.addProduct(item.id));
  };

  const removeProductHandler = () => {
    dispatch(cartActions.removeProduct(item.id));
  };

  const itemName = item.name.split(" ").slice(0, -1).join(" ");

  return (
    <div className="cart-item">
      <img src={`/assets/cart/image-${item.slug}.jpg`} alt="" />
      <div className="cart-item__name-price">
        <h4> {itemName}</h4>
        <p>{formatPrice(item.price)}</p>
      </div>
      {cartIsOpen && (
        <div className="cart-item__item-quantity">
          <div className="cart-item__item-quantity__minus" onClick={removeProductHandler}>
            -
          </div>
          <div className="cart-item__item-quantity__input">
            <input type="number" readOnly value={item.quantity} />
          </div>
          <div className="cart-item__item-quantity__plus" onClick={addProductHandler}>
            +
          </div>
        </div>
      )}

      {!cartIsOpen && <div className="cart-item__summary-quantity">{`x${item.quantity}`}</div>}
    </div>
  );
};

export default CartItem;
