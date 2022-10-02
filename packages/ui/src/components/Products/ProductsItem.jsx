import React from 'react';
import plusIcon from '../../assets/icons/plus-icon.svg';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/actions/productsAction";

const ProductsItem = ({product}) => {
  const dispatch = useDispatch()

  return (<div className="card">
    <NavLink to={`/product/${product.id}`} className="card__top">
      <img
        src={require(`../../assets/products/${product.img}`)}
        className="card__image"
        alt="product"
      />
      <span className="card__price">{`€${product.price}`}</span>
    </NavLink>
    <div className="card__body">
      <div className="card__title">{product.title}</div>
      <button type="button" className="card__button" onClick={() => dispatch(addToCart(product))}>
        <img src={plusIcon} alt="icon"/>
      </button>
    </div>
  </div>);
};

export default ProductsItem;
