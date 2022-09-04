import React from 'react';
import Nav from "./Nav";

const Menu = (props) => {
  return (<div className="container">
    <h2 className="section-heading">Our Menu</h2>
    <div>
      <div className="container">
        <div className="ribbon">
          <Nav/>
        </div>
      </div>
    </div>
  </div>);
}

export default Menu;