import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ProductPreviewHome from "../ProductsPreviews/ProductPreviewHome/ProductPreviewHome";

import "./headerHome.scss";

const HeaderHome = () => {
  const allProducts = useSelector((state) => state.products.allProducts);

  const productData = allProducts.find((item) => {
    return item.slug === "xx99-mark-two-headphones";
  });

  return (
    <Container>
      <ProductPreviewHome productData={productData} />
    </Container>
  );
};
const Container = styled.header`
  background-color: black;
  width: 100%;
`;
export default HeaderHome;
