import React from "react";
import PropTypes from "prop-types";

/* Single Slide Component */
export default function Slide({
  active = false,
  children = null,
  className = "",
  style = {},
}) {
  const status = active ? "active" : "";

  return (
    <div
      className={`carousel-item ${status} ${className}`}
      style={style}
      role="tabpanel"
    >
      <div className="d-block w-100">{children}</div>
    </div>
  );
}

// Validación de props
Slide.propTypes = {
  active: PropTypes.bool, // Indica si el slide está activo
  children: PropTypes.node, // Contenido del slide
  className: PropTypes.string, // Clases adicionales opcionales
  style: PropTypes.object, // Estilos inline opcionales
};
