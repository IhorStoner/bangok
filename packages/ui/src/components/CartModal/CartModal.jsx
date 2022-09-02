import React from 'react';
import CartItem from "./CartItem";
import CartForm from "./CartForm";

const CartModal = () => {
  return (<div className="modal">
    <div className="modal__overlay"></div>
    <div className="modal__inner">
      <div className="modal__header">
        <button type="button" className="modal__close">
          <img src="assets/icons/cross-icon.svg" alt="close-icon"/>
        </button>
        <h3 className="modal__title">Your order</h3>
      </div>
      <div className="modal__body">
        <div>
          <CartItem />
          <CartForm />
        </div>
      </div>
    </div>
  </div>);
};

export default CartModal;
