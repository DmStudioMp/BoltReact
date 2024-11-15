import React from "react";
import PropTypes from "prop-types";

export default function Indicators(props) {
  const slides = props.slides;
  const onSelect = props.onSelect;
  // Validar que slides sea un array antes de continuar
  if (!Array.isArray(slides) || slides.length === 0) {
    return null; // Si no hay slides o no es un array válido, no renderiza nada
  }

  return (
    <div className="carousel-indicators justify-content-center" role="tablist">
      {slides.map((_, index) => (
        <button
          key={index}
          type="button"
          className="indicator-btn"
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-selected={index === 0} // El primer slide puede ser seleccionado por defecto
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

// Validación de props
Indicators.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired, // Este prop es obligatorio
};

// Valores predeterminados
Indicators.defaultProps = {
  slides: [], // Predeterminamos un array vacío para slides
};
