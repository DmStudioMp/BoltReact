import React from "react";
import "./Forms.css";

export default function SubmitButton(props) {
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
