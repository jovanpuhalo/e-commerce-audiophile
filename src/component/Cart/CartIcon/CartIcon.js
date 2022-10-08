import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import Modal from "../../UI/Modal/Modal";
import Cart from "../Cart";
import "./cart-icon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartIsOpen = useSelector((state) => state.cart.cartIsOpen);
  const cartData = useSelector((state) => state.cart.cartProducts);

  const cartQuantity = cartData.reduce((res, currentItem) => {
    return res + currentItem.quantity;
  }, 0);

  const onClickHandler = () => {
    dispatch(cartActions.setCartIsOpen(!cartIsOpen));
  };

  return (
    <Fragment>
      <div className="main-menu__cart" onClick={onClickHandler}>
        {cartQuantity ? <div className="main-menu__cart__notification">{cartQuantity}</div> : null}
        <img src="/assets/icon-cart.svg" alt="" />
      </div>
      {cartIsOpen && (
        <Modal onClose={onClickHandler} className="cart-modal">
          <Cart />
        </Modal>
      )}
    </Fragment>
  );
};

export default CartIcon;
