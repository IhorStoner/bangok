import React from 'react';
import SliderProgress from "./SliderProgress";
import Checkbox from "./Checkbox";

function Filter(props) {
  return (<div className="container">
    <div className="filters">
      <SliderProgress/>
      <Checkbox/>
    </div>
  </div>);
}

export default Filter;