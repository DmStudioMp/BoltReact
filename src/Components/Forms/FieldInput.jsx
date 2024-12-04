import React from "react";
import "./Forms.css";

export default function FieldInput(props) {
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
