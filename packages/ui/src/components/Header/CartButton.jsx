import React from 'react';

function CartButton(props) {
  return (<>
    <button type="button" className="cart-icon cart-icon_visible">
      <div className="cart-icon__inner">
        <span className="cart-icon__count">5</span>
        <span className="cart-icon__price">€55.00</span>
      </div>
    </button>
</>);
}

export default CartButton;