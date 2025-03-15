import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Captcha from "../components/Captcha";

describe("Captcha Component", () => {
  test("renders without crashing", () => {
    render(<Captcha onChange={jest.fn()} />);
  });

  test("triggers onChange when user inputs correct CAPTCHA", () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Captcha onChange={mockOnChange} />
    );

    const input = getByPlaceholderText("Enter CAPTCHA");
    fireEvent.change(input, { target: { value: "test" } });

    expect(mockOnChange).toHaveBeenCalled();
  });
});
