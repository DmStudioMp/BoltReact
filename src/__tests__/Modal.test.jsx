import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../Components/Modal";

describe("Modal Component", () => {
  test("renders correctly when closed", () => {
    render(
      <Modal isOpen={false} closeModal={() => {}}>
        Test Content
      </Modal>
    );
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });

  test("renders correctly when open", () => {
    render(
      <Modal isOpen={true} closeModal={() => {}}>
        Test Content
      </Modal>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("calls closeModal when close button is clicked", () => {
    const mockClose = jest.fn();
    render(
      <Modal isOpen={true} closeModal={mockClose}>
        Test Content
      </Modal>
    );
    fireEvent.click(screen.getByLabelText("Close Modal"));
    expect(mockClose).toHaveBeenCalled();
  });
});
