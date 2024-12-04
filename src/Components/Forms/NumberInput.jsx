import React from "react";
import "./Forms.css";

export default function NumberInput(props) {
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
