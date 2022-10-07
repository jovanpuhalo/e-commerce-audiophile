import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Button from "../UI/Button";
import "./success-order.scss";

const SuccessOrderMsg = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backToHome = () => {
    navigate("/", { replace: true });
    dispatch(cartActions.emptyCart());
  };

  console.log("props.cartItems.length", props.cartItems.length);

  return (
    <div className="success-order-container">
      <div className="success-order">
        <div className="success-order__check">
          <IoIosCheckmarkCircle />
        </div>

        <h1 className="success-order__title">
          thank you <br />
          for your order
        </h1>

        <p className="success-order__message">{props.fullName}, you will receive an email confirmation shortly.</p>

        <div className="success-order__cart">
          <div className="success-order__cart__items">
            <div className="success-order__cart__items__item">{props.cartItems[0]}</div>

            {props.cartItems.length === 1 || (
              <div className={`success-order__cart__items__other-items`}>
                {props.cartItems.length === 2 ? "and 1 other item" : `and ${props.cartItems.length - 1} other items`}
              </div>
            )}
          </div>
          <div className="success-order__cart__total">
            <div className="success-order__cart__total__title">grand totall</div>
            <div className="success-order__cart__total__amount">{props.grandTotal}</div>
          </div>
        </div>

        <Button onClick={backToHome}>Back to home</Button>
      </div>
    </div>
  );
};

export default SuccessOrderMsg;
