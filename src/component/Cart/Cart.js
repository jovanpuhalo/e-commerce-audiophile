import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { cartActions } from "../../store/cart-slice";
import { formatPrice } from "../Helper/HelperFunctions";

import Button from "../UI/Button/Button";
import "./cart.scss";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartQuantity = cartData.reduce((res, currentItem) => {
    return res + currentItem.quantity;
  }, 0);

  const totalPrice = cartData.reduce((res, currentItem) => {
    return res + currentItem.quantity * currentItem.price;
  }, 0);

  const cartItems = cartData?.map((item, index) => {
    return <CartItem key={index} item={item} />;
  });

  const removeCartHandler = () => {
    dispatch(cartActions.emptyCart());
  };

  const checkoutHandler = () => {
    navigate("/checkout", { replace: true });
    dispatch(cartActions.setCartIsOpen(false));
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <h3 className="cart__header__title">{`Cart(${cartQuantity})`}</h3>
        <p className="cart__header__remove-all" onClick={removeCartHandler}>
          Remove all
        </p>
      </div>
      <div className="cart__items">
        {cartItems.length ? cartItems : <p className="cart__items__empty-cart">Your cart is empty!</p>}
      </div>
      <div className="cart__total">
        <h3>Total</h3>
        <p>{formatPrice(totalPrice)}</p>
      </div>
      <Button className={"width-100"} onClick={checkoutHandler} disabled={!cartItems.length}>
        checkout
      </Button>
    </div>
  );
};

export default Cart;
