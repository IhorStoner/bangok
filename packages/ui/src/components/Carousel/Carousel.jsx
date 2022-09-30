import React, {useEffect, useState} from 'react';
import angleIcon from '../../assets/icons/angle-icon.svg'
import angleLeftIcon from '../../assets/icons/angle-left-icon.svg'
import CarouselSlide from "./CarouselSlide";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {fetchSliderProducts} from "../../redux/actions/productsAction";
import {getSliderProducts} from "../../redux/selectors/productsSelector";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderProducts = useSelector(getSliderProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSliderProducts());
  }, [dispatch]);

  return (<div className="container">
    <div className="carousel">
      {sliderProducts.length - 1 !== activeSlide && <Button classNames={"carousel__arrow carousel__arrow_right"} img={angleIcon} onClick={() => setActiveSlide(activeSlide+1)}/>}
      {activeSlide !== 0 && <Button classNames={"carousel__arrow carousel__arrow_left"} img={angleLeftIcon} onClick={() => setActiveSlide(activeSlide-1)}/>}
      <div className="carousel__inner" style={{ transform: `translateX(${activeSlide * -988}px)`}}>
        {sliderProducts && sliderProducts.map(product => <CarouselSlide key={product.id} product={product}/>)}
      </div>
    </div>
  </div>);
};

export default Carousel;
