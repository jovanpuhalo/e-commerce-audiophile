import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Product from "../component/Product/Product";

const ProductPage = () => {
  const productsData = useSelector((state) => state.products.allProducts);
  const params = useParams();

  const product = productsData.find((item) => {
    return item.slug === params.id;
  });

  return (
    <Fragment>
      <Product productData={product} />
    </Fragment>
  );
};

export default ProductPage;
