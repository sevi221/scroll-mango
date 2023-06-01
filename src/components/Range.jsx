import { useCallback, useEffect, useState, useRef } from "react";
import "../assets/scss/Range.scss";

const Range = ({ min, max, rangeList, step }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  const changeMinValue = (event) => {
    event.preventDefault();
    const value = Math.min(Number(event.target.value), maxVal - step);
    setMinVal(value);
    minValRef.current = value;
  };

  const changeMaxValue = (event) => {
    event.preventDefault();
    const value = Math.max(Number(event.target.value), minVal + step);
    setMaxVal(value);
    maxValRef.current = value;
  };

  return (
    <>
      <div className="wrapper">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          step={step}
          onChange={changeMinValue}
          className="thumb thumb--left"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          step={step}
          onChange={changeMaxValue}
          className="thumb thumb--right"
        />
        <div className="slider">
          <div className="slider-track" />
          <div ref={range} className="slider-range" />
          <div className="slider-values-container">
            <div className="slider-left-value">
              <input
                readOnly={rangeList}
                value={minVal}
                onChange={changeMinValue}
              />
            </div>
            <div className="slider-right-value">
              <input value={maxVal} onChange={changeMaxValue} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Range;
