import React from "react";
import "./about-us.scss";

import { useInView } from "react-intersection-observer";
import { options } from "../Helper/intersectionOptions";

const AboutUs = () => {
  const { ref, inView } = useInView(options);

  return (
    <section className={`about ${inView && "product__show"}`} ref={ref}>
      <div className="about__text">
        <span>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </span>
        <br />
        <br />
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
        speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
        browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
        make Audiophile the best place to buy your portable audio equipment.
      </div>
      <div className="about__image"></div>
    </section>
  );
};

export default AboutUs;
