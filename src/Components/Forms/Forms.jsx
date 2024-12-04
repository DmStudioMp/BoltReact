import React from "react";
import "./Forms.css";

export default function Forms(props) {
  return (
    <form
      id={props.id}
      className="p-1 d-flex flex-column container-fluid align-items-center justify-content-center"
      role="form" // Asegura que el elemento sea identificado como formulario
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
}
