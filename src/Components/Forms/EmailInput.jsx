import React from "react";
import "./Forms.css";

export default function EmailInput(props) {
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
