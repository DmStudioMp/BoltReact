import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Controls from "../Components/Carrousel/Controls/Controls.jsx";

describe("Controls Component", () => {
  test("renders next and previous buttons and triggers events correctly", () => {
    const id = "testCarousel";
    render(<Controls id={id} />);

    const prevButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(prevButton);
    fireEvent.click(nextButton);

    expect(prevButton).toHaveAttribute("data-bs-target", `#${id}`);
    expect(nextButton).toHaveAttribute("data-bs-target", `#${id}`);
  });
});
