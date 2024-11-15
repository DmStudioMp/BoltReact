import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Carrousel from "../Components/Carrousel/Carrousel.jsx";

describe("Carrousel Component", () => {
  const slides = [
    { id: 1, text: "Slide 1" },
    { id: 2, text: "Slide 2" },
  ];

  test("renders all slides", () => {
    render(<Carrousel slides={slides} />);
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });

  test("navigates to next slide", () => {
    render(<Carrousel slides={slides} />);
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });

  test("navigates to previous slide", () => {
    render(<Carrousel slides={slides} />);
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    fireEvent.click(screen.getByRole("button", { name: /previous/i }));
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
  });
});
