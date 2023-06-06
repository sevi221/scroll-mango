import { waitFor } from "@testing-library/react";
import mockHttpService from "../../services/mockService";

jest.mock("../../services/mockService");

describe("Exercise1", () => {
  beforeEach(() => {
    mockHttpService.getMinMaxValues();
  });

  test("gets Exercise1 component mocked data", async () => {
    const mockData = {
      min: 0,
      max: 100,
      step: 100,
    };
    mockHttpService.getMinMaxValues.mockResolvedValueOnce(mockData);

    await waitFor(() => {
      expect(mockHttpService.getMinMaxValues).toHaveBeenCalledTimes(1);
    });
  });
});
