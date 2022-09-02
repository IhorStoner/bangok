import React from 'react';
import Nav from "./Nav";
import Button from "../Button/Button";
import angleIcon from '../../assets/icons/angle-icon.svg'

const Menu = (props) => {
  return (<div className="container">
    <h2 className="section-heading">Our Menu</h2>
    <div>
      <div className="container">
        <div className="ribbon">
          <Button classNames={"ribbon__arrow ribbon__arrow_left"} img={angleIcon}/>
          <Nav/>
          <Button classNames={"ribbon__arrow ribbon__arrow_right ribbon__arrow_visible"} img={angleIcon}/>
        </div>
      </div>
    </div>
  </div>);
}

export default Menu;