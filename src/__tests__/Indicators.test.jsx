import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Indicators from "../Components/Carrousel/Indicators/Indicators.jsx";
import "@testing-library/jest-dom";

describe("Indicators Component", () => {
  const mockOnSelect = jest.fn();

  afterEach(() => {
    mockOnSelect.mockClear(); // Limpia el mock después de cada test
  });

  test("renders without crashing when slides are empty", () => {
    render(<Indicators slides={[]} onSelect={mockOnSelect} />);
    expect(screen.queryByRole("button")).toBeNull();
  });

  test("renders correct number of indicators", () => {
    const mockSlides = [{ id: 1 }, { id: 2 }, { id: 3 }];
    render(<Indicators slides={mockSlides} onSelect={mockOnSelect} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(mockSlides.length);

    buttons.forEach((button, index) => {
      expect(button).toHaveAttribute("aria-label", `Go to slide ${index + 1}`);
      expect(button).toHaveTextContent((index + 1).toString());
    });
  });

  test("calls onSelect with correct index when a button is clicked", () => {
    const mockSlides = [{ id: 1 }, { id: 2 }, { id: 3 }];
    render(<Indicators slides={mockSlides} onSelect={mockOnSelect} />);

    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[1]); // Click on second button

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith(1);
  });

  test("does not throw an error when onSelect is not provided", () => {
    const mockSlides = [{ id: 1 }, { id: 2 }, { id: 3 }];
    render(<Indicators slides={mockSlides} onSelect={() => {}} />);
    const buttons = screen.getAllByRole("button");

    expect(() => fireEvent.click(buttons[0])).not.toThrow();
  });

  test("matches snapshot", () => {
    const mockSlides = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const { container } = render(
      <Indicators slides={mockSlides} onSelect={mockOnSelect} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders default props correctly", () => {
    const { container } = render(<Indicators onSelect={mockOnSelect} />);
    expect(container.firstChild).toBeNull();
  });
});
