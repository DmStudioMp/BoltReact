import React from "react";
import "./styles/Forms.css";
/* ------------------------------------------ Inputs -----------------------------------------------------------*/

export function TextInput(props) {
  return (
    <div className="form-floating container-fluid">
      <input
        type="text"
        className="form-control"
        id={props.id}
        placeholder={props.text}
        onChange={props.change}
      ></input>
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

      <select id={props.id} onChange={props.change}>
        <option value="">Choose from list</option>
        {props.options.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
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
        onChange={props.change}
        placeholder={props.text_input}
      ></input>

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
        onChange={props.change}
        autoComplete="current-password"
        placeholder={props.text_input}
      ></input>
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
        onChange={props.change}
      ></input>

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
      alt=""
      width="72"
      height="57"
    ></img>
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
        name={`${props.id}input`}
        placeholder={props.text}
        onChange={props.change}
      ></input>

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
        name={`${props.id}input`}
        type="file"
        onChange={props.change}
      />
    </div>
  );
}

/* ------------------------------------------ Forms -----------------------------------------------------------*/
export default function Forms(props) {
  return (
    <form
      id={props.id}
      className=" p-1 d-flex flex-column container-fluid align-items-center justify-content-center"
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
}
