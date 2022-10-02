import React, {useRef,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getCartCount, getCartSum} from "../../redux/selectors/productsSelector";
import {openCart} from "../../redux/actions/productsAction";

function CartButton(props) {
  const buttonRef = useRef();
  const dispatch = useDispatch();
  const cartCount = useSelector(getCartCount)
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
    <button type="button" ref={buttonRef} className="cart-icon cart-icon_visible" onClick={() => dispatch(openCart(true))}>
      <div className="cart-icon__inner">
        <span className="cart-icon__count">{cartCount}</span>
        <span className="cart-icon__price">{`€${cartSum.toFixed(2)}`}</span>
      </div>
    </button>
</>);
}

export default CartButton;