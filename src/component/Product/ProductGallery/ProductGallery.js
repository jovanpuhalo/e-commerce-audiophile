import React from "react";
import "./product-gallery.scss";

const ProductGallery = ({ productData }) => {
  return (
    <div className="product-gallery">
      <picture className="product-gallery__first">
        <source srcSet={productData.gallery?.first?.mobile} media="(max-width: 500px)" />
        <source srcSet={productData.gallery?.first?.tablet} media="(max-width: 1000px)" />
        <img src={productData.gallery?.first?.desktop} alt="" />
      </picture>

      <picture className="product-gallery__second">
        <source srcSet={productData.gallery?.second?.mobile} media="(max-width: 500px)" />
        <source srcSet={productData.gallery?.second?.tablet} media="(max-width: 1000px)" />
        <img src={productData.gallery?.second?.desktop} alt="" />
      </picture>

      <picture className="product-gallery__third">
        <source srcSet={productData.gallery?.third?.mobile} media="(max-width: 500px)" />
        <source srcSet={productData.gallery?.third?.tablet} media="(max-width: 1000px)" />
        <img src={productData.gallery?.third?.desktop} alt="" />
      </picture>
    </div>
  );
};

export default ProductGallery;
