import React, {useRef, useState} from 'react';

function SliderProgress() {
  const [width, setWidth] = useState(0);
  const [spice, setSpice] = useState(0)
  const sliderRef = useRef();
  const thumbRef = useRef();


  const mathSpice = (percent) => {
    console.log(percent);
    if(percent <= 13) {
      setSpice(0)
      setWidth(0);
    } else if(percent <= 25) {
      setSpice(1)
      setWidth(25);
    } else if(percent <= 50) {
      setSpice(2)
      setWidth(50);
    } else if(percent <= 75) {
      setSpice(3)
      setWidth(75);
    } else if(percent <= 100) {
      setSpice(4)
      setWidth(100);
    }

  }

  const onMouseDown = (event) => {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    let shiftX = event.clientX - thumbRef.current.getBoundingClientRect().left;
    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      let newLeft = event.clientX - shiftX - sliderRef.current?.getBoundingClientRect().left;

      // курсор вышел из слайдера => оставить бегунок в его границах.
      if (newLeft < 0) {
        newLeft = 0;
      }
      const rightEdge = sliderRef.current?.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      const percent = Math.floor(newLeft/rightEdge*100);
      // thumbRef.current.style.left = percent + '%'
      setWidth(percent);
    }

    function onMouseUp() {
      mathSpice(+thumbRef.current.style.left.split('%')[0]);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  return (<div>
    <div className="filters__group">
      <label className="filters__label">Max spiciness</label>
      <div className="filters__slider">
        <div className="slider" ref={sliderRef}>
          <div className="slider__thumb" ref={thumbRef} style={{left: `${width}%`}} onMouseDown={onMouseDown}>
            <span className="slider__value">{spice}</span>
          </div>
          <div className="slider__progress" style={{width: `${width}%`}}/>
          <div className="slider__steps">
            <span/><span/><span/><span className="slider__step-active"/><span/>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default SliderProgress;