import React from 'react';

function SliderProgress(props) {
  return (<div>
    <div className="filters__group">
      <label className="filters__label">Max spiciness</label>
      <div className="filters__slider">
        <div className="slider">
          <div className="slider__thumb" style={{left: "75%"}}>
            <span className="slider__value">3</span>
          </div>
          <div className="slider__progress" style={{width: "75%"}}/>
          <div className="slider__steps">
            <span/><span/><span/><span className="slider__step-active"/><span/>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default SliderProgress;