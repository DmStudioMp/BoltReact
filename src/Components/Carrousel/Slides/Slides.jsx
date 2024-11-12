import React from "react";

/* Slide with Image Placeholder */
export function SlideImg() {
  return (
    <svg
      className="bd-placeholder-img"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <rect width="100%" height="100%" fill="#777"></rect>
    </svg>
  );
}

/* Single Slide */
export default function Slide(props) {
  const status = props.active ? "active" : "";
  return (
    <div className={`carousel-item ${status}`}>
      <div className="d-block w-100">{children}</div>
    </div>
  );
}
