import React, { useState, useEffect } from "react";
import SpecialRange from "../../components/SpecialRange";
import mockHttpService from "../../services/mockService";

const Exercise2 = () => {
  const [min, setMin] = useState(1.99);
  const [max, setMax] = useState(100.99);
  const [step, setStep] = useState(1);
  const [value, setValue] = useState({ min, max });
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
          setValue({
            min: range[0],
            max: range[range.length - 1],
          });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Exercise2</h1>
      <SpecialRange
        min={min}
        max={max}
        step={step}
        value={value}
        rangeList={rangeList}
      />
    </>
  );
};
export default Exercise2;
