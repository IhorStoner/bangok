import React from 'react';

const NavItem = (props) => {
  return (<>
    <a href="/" className="ribbon__item ribbon__item_active">All</a>
    <a href="/" className="ribbon__item">Salads</a>
    <a href="/" className="ribbon__item">Soups</a>
    <a href="/" className="ribbon__item">Chicken dishes</a>
    <a href="/" className="ribbon__item">Beef dishes</a>
    <a href="/" className="ribbon__item">Seafood dishes</a>
    <a href="/" className="ribbon__item">Vegetable dishes</a>
    <a href="/" className="ribbon__item">Bits and bites</a>
    <a href="/" className="ribbon__item">On the side</a>
  </>);
}

export default NavItem;