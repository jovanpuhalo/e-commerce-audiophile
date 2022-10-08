import React, { Fragment } from "react";
import HeaderHome from "../component/Header/HeaderHome";
import ScrollToTop from "../component/Helper/ScrollToTop";
import SecondMenu from "../component/Menues/SecondMenu/SecondMenu";
import ProductsHome from "../component/ProductsHome/ProductsHome";

const HomePage = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <HeaderHome leftImage />
      <SecondMenu />
      <ProductsHome />
    </Fragment>
  );
};

export default HomePage;
