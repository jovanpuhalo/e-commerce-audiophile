import React, { Fragment } from "react";
import ProductHeader from "../component/Header/HeaderProduct";
import ScrollToTop from "../component/Helper/ScrollToTop";
import Products from "../component/Products/Products";

const HeadphonesPage = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <ProductHeader />
      <Products />
    </Fragment>
  );
};

export default HeadphonesPage;
