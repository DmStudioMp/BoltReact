import React from "react";
import PropTypes from "prop-types";

export default function Indicators({ slides = 1, carouselId }) {
  if (!Number.isInteger(slides) || slides <= 0) {
    console.error("The 'slides' prop must be a positive integer.");
    return null;
  }

  return (
    <div
      className="carousel-indicators justify-content-center"
      role="tablist"
      aria-controls={carouselId}
    >
      {Array.from({ length: slides }).map((_, index) => (
        <button
          key={index}
          type="button"
          className="indicator-btn"
          onClick={() => console.log(`Slide ${index + 1} selected`)}
          aria-label={`Go to slide ${index + 1}`}
          aria-selected={index === 0}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

Indicators.propTypes = {
  slides: PropTypes.number,
  carouselId: PropTypes.string,
};
