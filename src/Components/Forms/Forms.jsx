import React from "react";
import "./Forms.css";

/* ------------------------------------------ Inputs -----------------------------------------------------------*/

export function TextInput(props) {
  return (
    <div className="form-floating container-fluid">
      <input
        type="text"
        className="form-control"
        id={props.id}
        placeholder={props.text}
        aria-label={props.text_label}
        onChange={props.change}
      />
      <label htmlFor={props.id}>{props.text_label}</label>
    </div>
  );
}

export function OptionsInput(props) {
  return (
    <div className="container-fluid m-2">
      <label htmlFor={props.id} className="form-label">
        {props.text_label}
      </label>
      <select
        id={props.id}
        onChange={props.change}
        aria-label={props.text_label}
      >
        <option value="">Choose from list</option>
        {props.options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export function NumberInput(props) {
  return (
    <div className="form-floating container-fluid">
      <input
        type="number"
        id={props.id}
        className="form-control"
        placeholder={props.text_input}
        aria-label={props.text_label}
        onChange={props.change}
      />
      <label htmlFor={props.id}>{props.text_label}</label>
    </div>
  );
}

export function PasswordInput(props) {
  return (
    <div className="form-floating container-fluid">
      <input
        type="password"
        className="form-control"
        id={props.id}
        placeholder={props.text_input}
        aria-label={props.text_label}
        onChange={props.change}
        autoComplete="current-password"
      />
      <label htmlFor={props.id}>{props.text_label}</label>
    </div>
  );
}

export function EmailInput(props) {
  return (
    <div className="form-floating container-fluid">
      <input
        type="email"
        className="form-control"
        id={props.id}
        placeholder="name@example.com"
        aria-label="Email"
        onChange={props.change}
      />
      <label htmlFor={props.id}>Email</label>
    </div>
  );
}

export function ImageInput(props) {
  return (
    <img
      id={props.id}
      className="mb-4 d-flex rounded-circle"
      src={props.img}
      alt={props.alt || "Image placeholder"}
      width="72"
      height="57"
    />
  );
}

export function TitleContainer(props) {
  return <h1 className="h3 mb-3 fw-normal">{props.text}</h1>;
}

export function DateInput(props) {
  return (
    <div id="date-input" className="form-floating container-fluid">
      <input
        type="date"
        className="form-control"
        id={props.id}
        placeholder={props.text}
        aria-label={props.text_label}
        onChange={props.change}
      />
      <label htmlFor={props.id}>{props.text_label}</label>
    </div>
  );
}

export function SubmitButton(props) {
  return (
    <button
      id={props.id}
      className="w-100 btn btn-lg btn-dark m-1"
      type="submit"
      onClick={props.callback}
    >
      {props.text}
    </button>
  );
}

export function FieldInput(props) {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={props.id}>
        {props.text_label}
      </label>
      <input
        className="form-control"
        id={props.id}
        type="file"
        aria-label={props.text_label}
        onChange={props.change}
      />
    </div>
  );
}

/* ------------------------------------------ Forms -----------------------------------------------------------*/
export function Forms(props) {
  return (
    <form
      id={props.id}
      className="p-1 d-flex flex-column container-fluid align-items-center justify-content-center"
      role="form" // Asegura que el elemento sea identificado como formulario
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
}
