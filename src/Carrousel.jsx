import React from "react";
import "./Carrousel.css";

export function CarrouselControl() {
  const Prev = () => {
    return (
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
        aria-label="Previous" // Añadir aria-label para accesibilidad
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
    );
  };

  const Next = () => {
    return (
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
        aria-label="Next" // Añadir aria-label para accesibilidad
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    );
  };

  return (
    <>
      {Next()}
      {Prev()}
    </>
  );
}

export function CarrouselItem(props) {
  return (
    <div className={`carousel-item ${props.active ? "active" : ""}`}>
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
      <div className="container">
        <div className="carousel-caption text-start">{props.children}</div>
      </div>
    </div>
  );
}

export function CarrouselIndicators(props) {
  return (
    <div className="carousel-indicators">
      {props.indicadors.map((indicador, index) => {
        return (
          <button
            key={index}
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={index}
            className={indicador.status ? "active" : ""}
            aria-current={indicador.status ? "true" : "false"}
            aria-label={`Slide ${indicador.id}`}
          ></button>
        );
      })}
    </div>
  );
}

export function CarrouselInner(props) {
  return <div className="carousel-inner">{props.children}</div>;
}

export function Carrousel(props) {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <CarrouselInner>{props.children}</CarrouselInner>
      <CarrouselControl />
      <CarrouselIndicators indicadors={props.slides} />
    </div>
  );
}
