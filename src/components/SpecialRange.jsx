import { useCallback, useEffect, useState, useRef } from "react";
import "../assets/scss/Range.scss";

const SpecialRange = ({ min, max, step, value, rangeList }) => {
  const [minVal, setMinVal] = useState(min || value.min);
  const [maxVal, setMaxVal] = useState(max || value.max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const rangeRef = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  const findClosestValue = useCallback((array, target) => {
    let closestValue = array[0];
    let smallestDifference = Math.abs(target - closestValue);

    for (let i = 1; i < array.length; i++) {
      let difference = Math.abs(target - array[i]);
      if (difference < smallestDifference) {
        smallestDifference = difference;
        closestValue = array[i];
      }
    }
    return closestValue;
  }, []);

  useEffect(() => {
    const minPercent = getPercent(min);
    const maxPercent = getPercent(maxValRef.current);

    if (rangeRef.current) {
        rangeRef.current.style.left = `${minPercent}%`;
        rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(max);

    if (rangeRef.current) {
        rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  const changeMinValue = (event) => {
    event.preventDefault();
    const value = Math.min(Number(event.target.value), maxVal - step);
    const newValue = findClosestValue(rangeList, value);
    setMinVal(newValue);
    minValRef.current = value;
  };

  const changeMaxValue = (event) => {
    event.preventDefault();
    const value = Math.max(Number(event.target.value), minVal + step);
    const newValue = findClosestValue(rangeList, value);
    setMaxVal(newValue);
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
          <div ref={rangeRef} className="slider-range" />
          <div className="slider-values-container">
            <div className="slider-left-value">
              <input value={minVal} onChange={changeMinValue} />
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

export default SpecialRange;
