import React from 'react';
import NavItem from "./NavItem";
import Button from "../Button/Button";
import angleIcon from "../../assets/icons/angle-icon.svg";

// eslint-disable-next-line no-unused-vars
const filter = [
  {name: 'All'},
  {name: 'Salads'},
  {name: 'Soups'},
  {name: 'Chicken dishes'},
  {name: 'Seafood dishes'},
  {name: 'Vegetable dishes'},
  {name: 'Bits and bites'},
  {name: 'On the side'}
];

const Nav = (props) => {

  return (<nav className="ribbon__inner">
    <Button classNames={"ribbon__arrow ribbon__arrow_left"} img={angleIcon}/>
    <NavItem/>
    <Button classNames={"ribbon__arrow ribbon__arrow_right ribbon__arrow_visible"} img={angleIcon}/>
  </nav>);
}

export default Nav;