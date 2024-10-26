import React from "react";
import { useState } from "react";

/* ------------------------------------------ Inputs -----------------------------------------------------------*/

export function Text_input(props) {
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

export function Options_input(props) {
  return (
    <div className="container-fluid m-2">
      <label htmlFor={props.id} className="form-label">
        {props.text_label}
      </label>

      <select id={props.id} onChange={props.change}>
        <option value="">choise from list</option>
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

export function Number_input(props) {
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

export function Password_input(props) {
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

export function Email_input(props) {
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

export function Image_input(props) {
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

export function Title_container(props) {
  return <h1 className="h3 mb-3 fw-normal">{props.text}</h1>;
}

export function Date_input(props) {
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

export function Submit_button(props) {
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

export function Field_input(props) {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={props.id}>
        {props.text_label}
      </label>
      <input
        className="form-control"
        id={props.id} // Ensure this matches the label's "for" attribute
        name={`${props.id}input`} // Or whatever naming convention you want
        type="file"
        onChange={props.change} // Make sure to use the change handler
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
