import React from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import ProductPreview from "../ProductsPreviews/ProductPreview/ProductPreview";
import styled from "styled-components";
import "./product.scss";
import ProductGallery from "./ProductGallery/ProductGallery";
import MayAlsoLike from "./Also May Like/MayAlsoLike";

const Product = () => {
  const navigate = useNavigate();
  const productsData = useSelector((state) => state.products.allProducts);
  const params = useParams();

  let productData = productsData.find((item) => {
    return item.slug === params.id;
  });

  if (!productData) {
    productData = {};
  }

  const items = productData.includes?.map((item, index) => {
    return (
      <li key={index}>
        <div>{item.quantity}x</div>
        <div>{item.item}</div>
      </li>
    );
  });

  return (
    <Container>
      <div className="go-back" onClick={() => navigate(-1)}>
        Go Back
      </div>
      <ProductPreview productData={productData} />
      <div className="product__body">
        <div className="product__body__features">
          <h4>features</h4>
          {/* replace---u firestore ne prepoznaje \n u tekstu za prelazak u novi red pa smo morali ovo uradiit */}
          <p>{productData.features?.replace(/\\n/g, "\n")}</p>
        </div>
        <div className="product__body__include">
          <span>In the box</span>
          <ul>{items}</ul>
        </div>
      </div>
      <ProductGallery productData={productData} />
      <MayAlsoLike productData={productData} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`;

export default Product;
