import React, {useRef,useEffect} from 'react';
import {useSelector} from "react-redux";
import {getCart, getCartSum} from "../../redux/selectors/productsSelector";

function CartButton(props) {
  const buttonRef = useRef();
  const cart = useSelector(getCart)
  const cartSum = useSelector(getCartSum)

  const onScroll = () => {
    const elPosition = buttonRef.current.getBoundingClientRect();

    if(elPosition.top <= window.scrollY) {
      buttonRef.current.style.position = 'fixed'
      buttonRef.current.style.right = '15%'
    } else {
      buttonRef.current.style.position = 'absolute'
      buttonRef.current.style.right = '0'
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    };
  }, [buttonRef]);
  
  return (<>
    <button type="button" ref={buttonRef} className="cart-icon cart-icon_visible">
      <div className="cart-icon__inner">
        <span className="cart-icon__count">{cart.length}</span>
        <span className="cart-icon__price">{`€${cartSum}`}</span>
      </div>
    </button>
</>);
}

export default CartButton;