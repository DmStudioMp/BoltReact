import React from "react";
import { act } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Forms,
  TextInput,
  OptionsInput,
  NumberInput,
  PasswordInput,
  EmailInput,
  ImageInput,
  TitleContainer,
  DateInput,
  SubmitButton,
  FieldInput,
} from "../Components/Forms";

describe("Forms Component and Subcomponents", () => {
  test("Forms renders with children and handles submit", () => {
    const handleSubmit = jest.fn();

    render(
      <Forms id="testForm" onSubmit={handleSubmit}>
        <TextInput id="textInput" text="Test Text" text_label="Label" />
        <SubmitButton id="submitBtn" text="Submit" />
      </Forms>
    );

    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();

    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  test("TextInput renders and captures input", () => {
    const handleChange = jest.fn();

    render(
      <TextInput
        id="textInput"
        text="Test Text"
        text_label="Label"
        change={handleChange}
      />
    );

    const input = screen.getByLabelText("Label");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("new value");
  });

  test("OptionsInput renders and captures selection", () => {
    const handleChange = jest.fn();
    const options = ["Option 1", "Option 2", "Option 3"];

    render(
      <OptionsInput
        id="selectInput"
        text_label="Select an option"
        options={options}
        change={handleChange}
      />
    );

    const select = screen.getByLabelText("Select an option");
    fireEvent.change(select, { target: { value: "Option 1" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(select.value).toBe("Option 1");
  });

  test("NumberInput renders and captures input", () => {
    const handleChange = jest.fn();

    render(
      <NumberInput
        id="numberInput"
        text_label="Enter a number"
        change={handleChange}
      />
    );

    const input = screen.getByLabelText("Enter a number");
    fireEvent.change(input, { target: { value: "42" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("42");
  });

  test("PasswordInput renders and captures input", () => {
    const handleChange = jest.fn();

    render(
      <PasswordInput
        id="passwordInput"
        text_label="Enter your password"
        change={handleChange}
      />
    );

    const input = screen.getByLabelText("Enter your password");
    fireEvent.change(input, { target: { value: "secret" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("secret");
  });

  test("EmailInput renders and captures input", () => {
    const handleChange = jest.fn();

    render(<EmailInput id="emailInput" change={handleChange} />);

    const input = screen.getByLabelText("Email");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("test@example.com");
  });

  test("ImageInput renders correctly", () => {
    render(
      <ImageInput id="imageInput" img="https://via.placeholder.com/150" />
    );

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://via.placeholder.com/150");
  });

  test("TitleContainer renders correctly", () => {
    render(<TitleContainer text="Test Title" />);

    const title = screen.getByText("Test Title");
    expect(title).toBeInTheDocument();
  });

  test("DateInput captures date selection", () => {
    const handleChange = jest.fn();

    render(
      <DateInput
        id="dateInput"
        text_label="Pick a date"
        change={handleChange}
      />
    );

    const input = screen.getByLabelText("Pick a date");
    fireEvent.change(input, { target: { value: "2024-11-01" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("2024-11-01");
  });

  test("SubmitButton triggers callback on click", () => {
    const handleClick = jest.fn();

    render(
      <SubmitButton id="submitBtn" text="Submit" callback={handleClick} />
    );

    const button = screen.getByText("Submit");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("FieldInput renders and captures file input", () => {
    const handleChange = jest.fn();

    render(
      <FieldInput
        id="fileInput"
        text_label="Upload a file"
        change={handleChange}
      />
    );

    const input = screen.getByLabelText("Upload a file");
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    fireEvent.change(input, { target: { files: [file] } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.files[0]).toBe(file);
    expect(input.files).toHaveLength(1);
  });
});
