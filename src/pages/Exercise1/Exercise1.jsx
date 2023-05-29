import React, { useState, useEffect } from "react";
import Range from "../../components/Range";
import mockHttpService from "../../services/mockService";

const Exercise1 = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [step, setStep] = useState(1);
  const [value, setValue] = useState({ min, max, step });

  useEffect(() => {
    mockHttpService
      .getMinMaxValues()
      .then((data) => {
        setMin(data.min);
        setMax(data.max);
        setStep(data.step);
        setValue(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Exercise1</h1>
      <Range
        min={min}
        max={max}
        step={step}
        value={value}
        range={[]}
        onChangeValue={setValue}
      />
    </>
  );
};
export default Exercise1;
