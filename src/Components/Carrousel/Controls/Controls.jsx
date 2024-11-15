import React from "react";
import punycode from "punycode";

export default function Controls({ id }) {
  // Codificar el ID para asegurarse de que solo contenga caracteres ASCII seguros.
  const encodedId = punycode.encode(id);

  return (
    <>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${encodedId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${encodedId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </>
  );
}
