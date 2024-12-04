import React from "react";
import "./Forms.css";

export default function DateInput(props) {
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
