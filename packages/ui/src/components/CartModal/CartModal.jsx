import React from 'react';
import CartItem from "./CartItem";
import CartForm from "./CartForm";
import crossIcon from '../../assets/icons/cross-icon.svg'
import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../../redux/selectors/productsSelector";
import {openCart} from "../../redux/actions/productsAction";

const CartModal = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch()

  return (<div className="modal">
    <div className="modal__overlay"></div>
    <div className="modal__inner">
      <div className="modal__header">
        <button type="button" className="modal__close" onClick={() => dispatch(openCart(false))}>
          <img src={crossIcon} alt="close-icon"/>
        </button>
        <h3 className="modal__title">Your order</h3>
      </div>
      <div className="modal__body">
        <div>
          {cart.map(item => <CartItem key={item.id} item={item}/>)}
          <CartForm />
        </div>
      </div>
    </div>
  </div>);
};

export default CartModal;
