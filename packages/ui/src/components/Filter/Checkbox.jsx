import React from 'react';

function Checkbox(props) {
  return (<div>
    <div className="filters__group">
      <div className="filters__checkbox">
        <input
          className="styled-checkbox"
          id="nuts-checkbox"
          type="checkbox"
          value="1"
        />
        <label htmlFor="nuts-checkbox">
          <span className="filters__label">No nuts</span>
        </label>
      </div>
    </div>
    <div className="filters__group">
      <div className="filters__checkbox">
        <input
          className="styled-checkbox"
          id="vegeterian-checkbox"
          type="checkbox"
          value="1"
        />
        <label htmlFor="vegeterian-checkbox">
          <span className="filters__label">Vegeterian only</span>
        </label>
      </div>
    </div>
  </div>);
}

export default Checkbox;