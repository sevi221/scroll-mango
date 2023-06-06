import React, { useState, useEffect } from "react";
import Range from "../../components/Range";
import mockHttpService from "../../services/mockService";

const Exercise2 = () => {
  const [min, setMin] = useState(1.99);
  const [max, setMax] = useState(100.99);
  const [step, setStep] = useState(1);
  const [rangeList, setRangeList] = useState([]);

  useEffect(() => {
    mockHttpService
      .getFixedValues()
      .then((data) => {
        const range = data.sort((a, b) => a - b);
        setMin(range[0]);
        setMax(range[range.length - 1]);
        setRangeList(range);
        setStep(1);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Exercise2</h1>
      <Range
        min={min}
        max={max}
        step={step}
        rangeList={rangeList}
      />
    </>
  );
};
export default Exercise2;
