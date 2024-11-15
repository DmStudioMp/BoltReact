import React from "react";
import { render, screen } from "@testing-library/react";
import Slide, { SlideImg } from "../Components/Carrousel/Slides/Slides.jsx";
import "@testing-library/jest-dom";

describe("Slide Component", () => {
  test("renders Slide component without crashing", () => {
    render(<Slide />);
    expect(screen.queryByRole("presentation")).not.toBeNull();
  });

  test("applies 'active' class when active prop is true", () => {
    render(
      <Slide active={true}>
        <p>Active Slide</p>
      </Slide>
    );
    const slideElement = screen
      .getByText("Active Slide")
      .closest(".carousel-item");
    expect(slideElement).toHaveClass("active");
  });

  test("does not apply 'active' class when active prop is false", () => {
    render(
      <Slide active={false}>
        <p>Inactive Slide</p>
      </Slide>
    );
    const slideElement = screen
      .getByText("Inactive Slide")
      .closest(".carousel-item");
    expect(slideElement).not.toHaveClass("active");
  });

  test("renders children correctly", () => {
    render(
      <Slide>
        <p>Slide Content</p>
      </Slide>
    );
    expect(screen.getByText("Slide Content")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <Slide active={true}>
        <p>Snapshot Slide</p>
      </Slide>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("SlideImg Component", () => {
  test("renders SlideImg component without crashing", () => {
    render(<SlideImg />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });

  test("renders placeholder rectangle with correct dimensions and fill", () => {
    render(<SlideImg />);
    const rectElement = screen
      .getByRole("img", { hidden: true })
      .querySelector("rect");
    expect(rectElement).toHaveAttribute("width", "100%");
    expect(rectElement).toHaveAttribute("height", "100%");
    expect(rectElement).toHaveAttribute("fill", "#777");
  });

  test("matches snapshot for SlideImg", () => {
    const { container } = render(<SlideImg />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
