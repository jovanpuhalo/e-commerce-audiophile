import React, { Fragment } from "react";
import ProductHeader from "../component/Header/HeaderProduct";
import ScrollToTop from "../component/Helper/ScrollToTop";
import Products from "../component/Products/Products";

const SpeakersPage = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <ProductHeader />
      <Products />
    </Fragment>
  );
};

export default SpeakersPage;
