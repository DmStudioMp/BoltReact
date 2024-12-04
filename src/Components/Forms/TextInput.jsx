import React from "react";
import "./Forms.css";

export default function TextInput(props) {
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
