import React from 'react';
import './Banner.css';
import Image from "./Image/Ban.png"

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Coaching</h1>
        <p className="banner__subtitle">Ac eu mollis sit egestas diam.</p>
        <p className="banner__description">
          Non augue odio sed morbi integer lorem tellus dictum dui sed at a risus netus
          ultricies pretium elementum sociis nisi eu.
        </p>
      </div>
      <div className="banner__image">
      <img src={Image} alt='banner'/>
      </div>
    </div>
  );
};

export default Banner;
