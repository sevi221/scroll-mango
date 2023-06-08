const mockHttpService = {
  getMinMaxValues() {
    return new Promise((resolve) => {
      const minMaxValues = {
        min: Number(0),
        max: Number(100),
        step: Number(1),
      };
      resolve(minMaxValues);
    }).catch((err) => console.err(err));
  },
  getFixedValues() {
    return new Promise((resolve) => {
      const fixedValues = [1.99, 10.99, 5.99, 50.99, 30.99, 100.99, 70.99];
      resolve(fixedValues);
    }).catch((err) => console.err(err));
  },
};

export default mockHttpService;
