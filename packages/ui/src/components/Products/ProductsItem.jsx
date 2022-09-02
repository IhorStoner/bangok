import React from 'react';
import plusIcon from '../../assets/icons/plus-icon.svg';

const ProductsItem = ({ product }) => {
  return (<div className="card">
      <div className="card__top">
        <img
          src={require(`../../assets/products/${product.img}`)}
          className="card__image"
          alt="product"
        />
        <span className="card__price">€10.00</span>
      </div>
      <div className="card__body">
        <div className="card__title">Laab kai chicken salad</div>
        <button type="button" className="card__button">
          <img src={plusIcon} alt="icon"/>
        </button>
      </div>
    </div>);
};

export default ProductsItem;
