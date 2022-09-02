import React from 'react';

const Button = ({ classNames, img }) => {
  return (<button className={classNames}>
    <img src={img} alt="icon"/>
  </button>);
}

export default Button;