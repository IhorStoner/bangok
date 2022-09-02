import React from 'react';
import squareMinusIcon from '../../assets/icons/square-minus-icon.svg'
import squarePlusIcon from '../../assets/icons/square-plus-icon.svg'

const CartItem = (props) => {
  return (<div>
    <div className="cart-product">
      <div className="cart-product__img">
        <img src="assets/products/red_curry.png" alt="product"/>
      </div>
      <div className="cart-product__info">
        <div className="cart-product__title">Penang shrimp</div>
        <div className="cart-product__price-wrap">
          <div className="cart-counter">
            <button
              type="button"
              className="cart-counter__button cart-counter__button_minus"
            >
              <img
                src={squareMinusIcon}
                alt="minus"
              />
            </button>
            <span className="cart-counter__count">3</span>
            <button
              type="button"
              className="cart-counter__button cart-counter__button_plus"
            >
              <img src={squarePlusIcon} alt="plus"/>
            </button>
          </div>
          <div className="cart-product__price">€48.00</div>
        </div>
      </div>
    </div>
  </div>);
};


export default CartItem;
