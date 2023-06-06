import { waitFor } from "@testing-library/react";
import mockHttpService from "../../services/mockService";

jest.mock("../../services/mockService");

describe("Exercise2", () => {
  beforeEach(() => {
    mockHttpService.getFixedValues();
  });

  test("gets Exercise2 component mocked data", async () => {
    const mockData = [1.99, 10.99, 5.99, 50.99, 30.99, 100.99, 70.99];
    mockHttpService.getFixedValues.mockResolvedValueOnce(mockData);

    await waitFor(() => {
      expect(mockHttpService.getFixedValues).toHaveBeenCalledTimes(1);
    });
  });
});
