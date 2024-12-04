import React from "react";
import "./Forms.css";

export default function OptionsInput({
  id = "",
  text_label = "Select an option",
  change = () => {},
  options = [],
}) {
  return (
    <div className="container-fluid m-2">
      <label htmlFor={id} className="form-label">
        {text_label}
      </label>
      <select id={id} onChange={change} aria-label={text_label}>
        <option value="">Choose from list</option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
