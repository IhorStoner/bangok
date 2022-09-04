import React, {useRef} from 'react';

function SliderProgress() {
  const sliderRef = useRef();
  const thumbRef = useRef();

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
      thumbRef.current.style.left = percent + '%'
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  return (<div>
    <div className="filters__group">
      <label className="filters__label">Max spiciness</label>
      <div className="filters__slider">
        <div className="slider" ref={sliderRef}>
          <div className="slider__thumb" ref={thumbRef} style={{left: "0%"}} onMouseDown={onMouseDown}>
            <span className="slider__value">3</span>
          </div>
          <div className="slider__progress" style={{width: "0%"}}/>
          <div className="slider__steps">
            <span/><span/><span/><span className="slider__step-active"/><span/>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default SliderProgress;