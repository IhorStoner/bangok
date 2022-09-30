import React from 'react';

const NavItem = ({name, isActive, onClick}) => {
  return (<>
    <button className={`ribbon__item ${isActive && 'ribbon__item_active'}`} onClick={onClick}>{name}</button>
  </>);
}

export default NavItem;