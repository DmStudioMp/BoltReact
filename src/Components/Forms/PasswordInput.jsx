import React from "react";
import "./Forms.css";

export default function PasswordInput(props) {
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
