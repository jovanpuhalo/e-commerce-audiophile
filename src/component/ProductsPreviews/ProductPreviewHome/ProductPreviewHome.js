import React, { useState } from "react";
import Button from "../../UI/Button";
import { useNavigate, useParams } from "react-router";
import "./product-preview-home.scss";

const ProductPreviewHome = ({ productData }) => {
  const navigate = useNavigate();
  const params = useParams();

  const [loading] = useState(false);

  if (!productData) {
    productData = {};
  }

  const onClickHandler = () => {
    // navigate(`/product/${productData.slug}`, { state: { ...productData } });
    navigate(`/product/${productData.slug}`);
  };

  const spinner = <div>Loading....</div>;

  const homeProductSrc = productData.image?.home?.homeImage;

  return (
    <div className="container-product-home">
      {loading && spinner}
      {!loading && (
        <div className="product-preview-home">
          <div className={`product-preview-home__text`}>
            <h4>NEW PRODUCT</h4>
            <h1>{productData.name}</h1>
            <p>{productData.description} </p>
            {params.id && (
              <div className="product-preview-home__text__price">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })
                  .format(productData.price)
                  .replace(/^(\D+)/, "  $   ")}
              </div>
            )}

            <Button onClick={onClickHandler}>see product</Button>
          </div>
          <div className="product-preview-home__image ">
            <img src={`${homeProductSrc}`} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPreviewHome;
