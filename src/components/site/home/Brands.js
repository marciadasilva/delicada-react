import React from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {
  return (
    <div className="wrapper brands">
      <h3 className="brands__title">Marcas de qualidade</h3>
      <div className="wrapper brands__list">
        <div className="brands__image__overlay">
          <img className="brands__image" src="/images/shopping1.png" alt="" />
        </div>
        <div className="brands__image__overlay">
          <img className="brands__image" src="/images/shopping2.png" alt="" />
        </div>
        <div className="brands__image__overlay">
          <img className="brands__image" src="/images/shopping3.png" alt="" />
        </div>
        <div className="brands__image__overlay">
          <img className="brands__image" src="/images/shopping4.png" alt="" />
        </div>
        <div className="brands__image__overlay">
          <img className="brands__image" src="/images/shopping5.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
