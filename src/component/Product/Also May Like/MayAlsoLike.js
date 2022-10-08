import React from "react";
import { useNavigate } from "react-router";
import Button from "../../UI/Button/Button";
import "./may-also-like.scss";

const MayAlsoLike = ({ productData }) => {
  const navigate = useNavigate();

  const items = productData.others?.map((item, index) => {
    const onClickHandler = () => {
      navigate(`/product/${item.slug}`);
    };
    return (
      <li key={index} className="others__item">
        <picture className="others__item__img">
          <source srcSet={item.image.mobile} media="(max-width: 500px)" />
          <source srcSet={item.image.tablet} media="(max-width: 1000px)" />
          <img src={item.image.desktop} alt="" />
        </picture>

        <h1>{item.name}</h1>
        <Button onClick={onClickHandler}>see product</Button>
      </li>
    );
  });

  return (
    <div className="others-container">
      <h1> you may also like</h1>
      <ul className="others">{items}</ul>
    </div>
  );
};

export default MayAlsoLike;
