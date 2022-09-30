import React from 'react';
import plusIcon from "../../assets/icons/plus-icon.svg";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/actions/productsAction";

function CarouselSlide({ product }) {
  const dispatch = useDispatch();

  return (<>
    <div className="carousel__slide">
      <img
        src={require(`../../assets/carousel/${product.img}`)}
        className="carousel__img"
        alt="slide"
      />
      <div className="carousel__caption">
        <span className="carousel__price">{`€${product.price}`}</span>
        <div className="carousel__title">{product.title}</div>
        <button type="button" className="carousel__button" onClick={() => dispatch(addToCart(product))}>
          <img src={plusIcon} alt="icon"/>
        </button>
      </div>
    </div>
  </>);
}

export default CarouselSlide;