import React from 'react';
import angleIcon from '../../assets/icons/angle-icon.svg'
import angleLeftIcon from '../../assets/icons/angle-left-icon.svg'
import CarouselSlide from "./CarouselSlide";
import Button from "../Button/Button";

const Carousel = () => {
  return (<div className="container">
    <div className="carousel">
      <Button classNames={"carousel__arrow carousel__arrow_right"} img={angleIcon}/>
      <Button classNames={"carousel__arrow carousel__arrow_left"} img={angleLeftIcon}/>
      <div className="carousel__inner">
        <CarouselSlide/>
      </div>
    </div>
  </div>);
};

export default Carousel;
