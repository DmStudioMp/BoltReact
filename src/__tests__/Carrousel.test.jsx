import { render, screen } from "@testing-library/react";
import Carrousel from "../Components/Carrousel/Carrousel";

describe("Carrousel Component", () => {
  const slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
  ];

  it("should render slides correctly", () => {
    render(<Carrousel slides={slides} />);
    const slideElements = screen.getAllByText(/Slide/);
    expect(slideElements.length).toBe(2);
  });
});
