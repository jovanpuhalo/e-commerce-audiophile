import React, { useState } from "react";
import Button from "../../UI/Button";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

import "./product-preview.scss";
import AddToCartButton from "../../UI/Add To Cart Button/AddToCartButton";
import { formatPrice } from "../../Helper/HelperFunctions";

const ProductPreview = ({ productData, imageSide = "left" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [loading] = useState(false);

  if (!productData) {
    productData = {};
  }

  const onClickHandler = () => {
    // navigate(`/product/${productData.slug}`, { state: { ...productData } });
    navigate(`/product/${productData.slug}`);
  };

  const addToCartHandler = (quantity) => {
    dispatch(cartActions.addProductToCart({ productData, quantity }));
  };

  const removeToCartHandler = (params) => {};
  const spinner = <div>Loading....</div>;

  const mobileeSrc = !params.id
    ? productData.image?.mobile?.productPreviewImage
    : productData.image?.mobile.productImage;
  const tabletSrc = !params.id
    ? productData.image?.tablet?.productPreviewImage
    : productData.image?.tablet.productImage;
  const desktopSrc = !params.id
    ? productData.image?.desktop?.productPreviewImage
    : productData.image?.desktop.productImage;

  const productClass = `product-preview ${imageSide === "right" && "product-preview__image-right"} ${
    params.id && "product_details"
  }`;

  return (
    <div className="container">
      {loading && spinner}
      {!loading && (
        <div className={productClass}>
          <picture className="product-preview__image ">
            <source srcSet={mobileeSrc} media="(max-width: 564px)" />
            <source srcSet={tabletSrc} media="(max-width: 1000px)" />
            <img src={desktopSrc} alt="op" />
          </picture>

          <div className={`product-preview__text`}>
            <h4>NEW PRODUCT</h4>
            <h1>{productData.name}</h1>
            <p>{productData.description} </p>
            {params.id && <div className="product-preview__text__price">{formatPrice(productData.price)}</div>}
            {params.id ? (
              <AddToCartButton addToCartHandler={addToCartHandler} removeToCartHandler={removeToCartHandler} />
            ) : (
              <Button onClick={onClickHandler}>see product</Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
