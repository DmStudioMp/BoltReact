import React from "react";
import PropTypes from "prop-types";

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
      role="img"
    >
      <rect width="100%" height="100%" fill="#777"></rect>
    </svg>
  );
}

/* Single Slide */
export default function Slide({ active, children }) {
  const status = active ? "active" : "";
  return (
    <div className={`carousel-item ${status}`} role="tabpanel">
      <div className="d-block w-100">{children}</div>
    </div>
  );
}

// Validación de props
Slide.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
};

// Valores predeterminados
Slide.defaultProps = {
  active: false,
  children: null,
};
