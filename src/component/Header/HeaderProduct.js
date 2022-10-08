import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

import "./header-product.scss";

const ProductHeader = () => {
  const location = useLocation();

  return (
    <Container>
      <div className="header-product">
        <div className="header-product__text">{location.pathname.slice(-location.pathname.length + 1)}</div>
      </div>
    </Container>
  );
};
const Container = styled.header`
  background-color: black;
  width: 100%;
  color: black;
  padding: 10rem 0 0rem 0;

  @media screen and (max-width: 62.5em) {
    padding: 5rem 0 0rem 0;
  }
`;

export default ProductHeader;
