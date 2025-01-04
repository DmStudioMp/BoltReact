import React from "react";
import "./Forms.css";

export default function ImageInput(props) {
  return (
    <img
      id={props.id}
      className="mb-4 d-flex rounded-circle"
      src={props.img || null}
      alt={props.alt || "Image placeholder"}
      width="2.5em"
      height="2em"
    />
  );
}
