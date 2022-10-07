import React from "react";
import styled from "styled-components";
import FirstProduct from "./FirstProduct";
import SecondProduct from "./SecondProduct";
import TirdProduct from "./TirdProduct";

const ProductsHome = () => {
  return (
    <Container>
      <FirstProduct />
      <SecondProduct />
      <TirdProduct />
    </Container>
  );
};

const Container = styled.main`
  padding: 0 2rem;
  max-width: 110rem;
  width: 100%;
  margin: 0 auto;
`;
export default ProductsHome;
