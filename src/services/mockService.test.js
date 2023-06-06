import mockHttpService from "./mockService";

describe("mockHttpService", () => {
  test("getMinMaxValues returns expected values", async () => {
    const minMaxValues = await mockHttpService.getMinMaxValues();

    expect(minMaxValues).toEqual({
      min: expect.any(Number),
      max: expect.any(Number),
      step: expect.any(Number),
    });
    expect(minMaxValues.min).toBe(0);
    expect(minMaxValues.max).toBe(100);
    expect(minMaxValues.step).toBe(1);
  });

  test("getFixedValues returns expected values", async () => {
    const fixedValues = await mockHttpService.getFixedValues();

    expect(fixedValues).toEqual(expect.arrayContaining([1.99, 10.99, 5.99, 50.99, 30.99, 100.99, 70.99]));
  });
});
