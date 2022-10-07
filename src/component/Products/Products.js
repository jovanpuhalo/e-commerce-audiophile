import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import ProductPreview from "../ProductsPreviews/ProductPreview/ProductPreview";

const Products = () => {
  const productsData = useSelector((state) => state.products.allProducts);
  const location = useLocation();

  const data = productsData.filter(
    (product) => product.category === location.pathname.slice(-location.pathname.length + 1)
  );

  const products = data.map((item, index) => {
    return <ProductPreview key={index} productData={item} imageSide={index % 2 !== 0 && "right"} />;
  });

  return <div className="jovan">{products}</div>;
};

export default Products;
