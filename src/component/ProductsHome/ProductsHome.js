import React from "react";
import styled from "styled-components";
import FirstProduct from "./FirstProduct";
import SecondProduct from "./SecondProduct";
import TirdProduct from "./TirdProduct";
import { useInView } from "react-intersection-observer";
import { options } from "../Helper/intersectionOptions";

const ProductsHome = () => {
  const { ref: firstRef, inView: firstView } = useInView(options);
  const { ref: secondRef, inView: secondView } = useInView(options);
  const { ref: thirdRef, inView: thirdView } = useInView(options);

  return (
    <Container>
      <FirstProduct inVieew={firstView} ref={firstRef} />
      <SecondProduct inVieew={secondView} ref={secondRef} />
      <TirdProduct inVieew={thirdView} ref={thirdRef} />
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
