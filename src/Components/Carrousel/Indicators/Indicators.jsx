import React from "react";

export default function Indicators({ indicators, id }) {
  return (
    <div className="carousel-indicators justify-content-center">
      {indicators.map((slide, index) => (
        <button
          key={index}
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to={index}
          className={slide.status ? "active" : ""}
          aria-current={slide.status ? "true" : undefined}
          aria-label={`Slide ${index + 1}`}
        ></button>
      ))}
    </div>
  );
}
