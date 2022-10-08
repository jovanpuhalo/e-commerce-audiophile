import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../Helper/yupValidationSchema";
import CartItem from "../Cart/CartItem/CartItem";
import { formatPrice } from "../Helper/HelperFunctions";
import Button from "../UI/Button/Button";
import "./checkout.scss";
import Modal from "../UI/Modal/Modal";
import SuccessOrderMsg from "../SuccessOrderingMessage/SuccessOrderMsg";

const Checkout = () => {
  const cartData = useSelector((state) => state.cart.cartProducts);
  const [showSuccesMsg, setShowSuccessMsg] = useState(false);

  const navigate = useNavigate();

  const paymentEmoneyRef = useRef();
  const paymentCashRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const fullName = watch("name");

  const onPaymentHandler = (e) => {
    if (e.target.textContent === "E-Money") {
      paymentEmoneyRef.current.style.display = "flex";
      paymentCashRef.current.style.display = "none";
    } else {
      paymentCashRef.current.style.display = "flex";
      paymentEmoneyRef.current.style.display = "none";
    }
  };

  const onSubmit = (data, errors) => {
    setShowSuccessMsg(true);
  };

  const totalPrice = cartData.reduce((res, currentItem) => {
    return res + currentItem.quantity * currentItem.price;
  }, 0);

  const cartItems = cartData?.map((item, index) => {
    return <CartItem key={index} item={item} />;
  });

  const grandTotal = formatPrice(
    Number((totalPrice * 0.001).toFixed(0)) + Number((totalPrice * 0.01).toFixed(0)) + totalPrice
  );
  return (
    <main className="checkout-container">
      <div className="go-back-checkout" onClick={() => navigate(-1)}>
        Go Back
      </div>

      <div className="checkout">
        <form className="checkout__form">
          <p className="checkout__form__title">CHECKOUT</p>

          <p className="checkout__form__sub-title">BILLING DETAILS</p>
          <div className="checkout__form__details">
            <div className={`checkout__form__details__form-control ${errors.name?.message && "error"}`}>
              <div className="checkout__form__details__form-control__label-error">
                <label htmlFor="name">Name</label>
                {errors.name?.message && <p>{errors.name.message}</p>}
              </div>
              <input type="email" id="name" placeholder="Name" {...register("name")} />
            </div>

            <div className={`checkout__form__details__form-control ${errors.email?.message && "error"}`}>
              <div className="checkout__form__details__form-control__label-error">
                <label htmlFor="email">Email Address</label>
                {errors.email?.message && <p>{errors.email.message}</p>}
              </div>
              <input type="email" id="email" placeholder="Email" {...register("email")} />
            </div>

            <div className={`checkout__form__details__form-control ${errors.phone?.message && "error"}`}>
              <div className="checkout__form__details__form-control__label-error">
                <label htmlFor="phone">Phone number</label>
                {errors.phone?.message && <p>{errors.phone.message}</p>}
              </div>
              <input type="number" id="phone" placeholder="Phone number" {...register("phone")} />
            </div>
          </div>

          <h4 className="checkout__form__sub-title">SHIPPING INFO</h4>
          <div className="checkout__form__details">
            <div className={`checkout__form__details__form-control address ${errors.address?.message && "error"}`}>
              <div className="checkout__form__details__form-control__label-error">
                <label htmlFor="address">Address</label>
                {errors.address?.message && <p>{errors.address.message}</p>}
              </div>
              <input type="text" id="address" placeholder="Address" {...register("address")} />
            </div>

            <div className={`checkout__form__details__form-control ${errors.zipCode?.message && "error"}`}>
              <div className="checkout__form__details__form-control__label-error">
                <label htmlFor="zip">ZIP Code</label>
                {errors.zipCode?.message && <p>{errors.zipCode.message}</p>}
              </div>
              <input type="number" id="zip" placeholder="ZIP Code" {...register("zipCode")} />
            </div>

            <div className={`checkout__form__details__form-control ${errors.city?.message && "error"}`}>
              <div className="checkout__form__details__form-control__label-error">
                <label htmlFor="city">City</label>
                {errors.city?.message && <p>{errors.city.message}</p>}
              </div>
              <input type="text" id="city" placeholder="City" {...register("city")} />
            </div>

            <div className={`checkout__form__details__form-control ${errors.country?.message && "error"}`}>
              <div className="checkout__form__details__form-control__label-error">
                <label htmlFor="country">Country</label>
                {errors.country?.message && <p>{errors.country.message}</p>}
              </div>
              <input type="text" id="country" placeholder="Country" {...register("country")} />
            </div>
          </div>

          <h4 className="checkout__form__sub-title">PAYMENT DETAILS</h4>

          <div className="checkout__form__payment">
            <div className="checkout__form__payment__title">Payment Method</div>
            <div className="checkout__form__payment__options">
              <div className="checkout__form__payment__options__e-money">
                <input type="radio" id="emoney" name="payment" defaultChecked={true} />
                <label htmlFor="emoney" onClick={onPaymentHandler}>
                  E-Money
                </label>
              </div>
              <div className="checkout__form__payment__options__cash">
                <input type="radio" id="cash" name="payment" defaultChecked={false} />
                <label htmlFor="cash" onClick={onPaymentHandler}>
                  Cash On Delivery
                </label>
              </div>
            </div>
          </div>

          <div className="checkout__form__details checkout__form__payment-details" ref={paymentEmoneyRef}>
            <div className="checkout__form__details__form-control">
              <label htmlFor="e-money-number">E-Money Number</label>
              <input type="text" id="e-money-number" placeholder="E-Money Number" />
            </div>
            <div className="checkout__form__details__form-control">
              <label htmlFor="pin">E-Money PIN</label>
              <input type="text" id="pin" placeholder="E-Money PIN" />
            </div>
          </div>

          <div className="cash-on-delivery" ref={paymentCashRef}>
            <img src="/assets/shared/payondelivery.png" alt="" />
            <div>
              The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your
              residence. Just make sure your address is correct so that your order will not be cancelled.
            </div>
          </div>
        </form>

        <div className="checkout__summary sticky">
          <p className="checkout__summary__title">SUMMARY</p>
          <div className="checkout__summary__items">
            {cartItems.length ? cartItems : <p className="checkout__summary__items__empty-cart">Your cart is empty!</p>}
          </div>
          <div className="checkout__summary__total">
            <p>TOTAL</p>
            <p>{formatPrice(totalPrice)}</p>
          </div>
          <div className="checkout__summary__shipping">
            <p>shipping</p>
            <p>{formatPrice((totalPrice * 0.01).toFixed(0))}</p>
          </div>
          <div className="checkout__summary__vat">
            <p>VAT (INCLUDED) </p>
            <p>{formatPrice((totalPrice * 0.001).toFixed(0))}</p>
          </div>
          <div className="checkout__summary__grand-total">
            <p>grand total </p>
            <p>
              {formatPrice(
                Number((totalPrice * 0.001).toFixed(0)) + Number((totalPrice * 0.01).toFixed(0)) + totalPrice
              )}
            </p>
          </div>

          <Button
            disabled={isSubmitSuccessful || !cartItems.length}
            className="width-100"
            onClick={handleSubmit(onSubmit)}
          >
            continue & pay
          </Button>
        </div>
      </div>

      {showSuccesMsg && (
        <Modal
          onClose={() => setShowSuccessMsg(false)}
          className="success-modal"
          classContainer="succes-mesg-container"
        >
          <SuccessOrderMsg fullName={fullName} cartItems={cartItems} grandTotal={grandTotal} />
        </Modal>
      )}
    </main>
  );
};

export default Checkout;
