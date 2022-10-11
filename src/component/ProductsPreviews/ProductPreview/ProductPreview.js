import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { useInView } from "react-intersection-observer";
import { options } from "../../Helper/intersectionOptions";

import "./product-preview.scss";
import AddToCartButton from "../../UI/Add To Cart Button/AddToCartButton";
import { formatPrice } from "../../Helper/HelperFunctions";

const ProductPreview = ({ productData, imageSide = "left" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const { ref, inView } = useInView({ ...options, threshold: 0.2 });

  const [loading] = useState(false);

  if (!productData) {
    productData = {};
  }
  // let product = productData;

  // useEffect(() => {
  //   productData = {};
  //   console.log("usao u product preview", productData);
  // }, []);

  const onClickHandler = () => {
    // navigate(`/product/${productData.slug}`, { state: { ...productData } });
    navigate(`/product/${productData.slug}`);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCartHandler = (quantity) => {
    dispatch(cartActions.addProductToCart({ productData, quantity }));
  };

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
        <div className={`${productClass} ${inView && "product__show"}`} ref={ref}>
          <picture className="product-preview__image ">
            <source srcSet={mobileeSrc} media="(max-width: 564px)" />
            <source srcSet={tabletSrc} media="(max-width: 1000px)" />
            <img src={desktopSrc} alt="" />
          </picture>

          <div className={`product-preview__text`}>
            <h4>NEW PRODUCT</h4>
            <h1>{productData.name}</h1>
            <p>{productData.description} </p>
            {params.id && <div className="product-preview__text__price">{formatPrice(productData.price)}</div>}
            {params.id ? (
              <AddToCartButton addToCartHandler={addToCartHandler} />
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
