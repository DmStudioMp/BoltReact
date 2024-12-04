import React from "react";
import PropTypes from "prop-types";
import "./Carrousel.css";

import Indicators from "./Indicators/Indicators.jsx";
import Controls from "./Controls/Controls.jsx";

import { v4 as uuidv4 } from "uuid";

function CarrouselInner({ children }) {
  return <div className="carousel-inner">{children}</div>;
}

CarrouselInner.propTypes = {
  children: PropTypes.node,
};

export default function Carrousel({
  slides = 3,
  id = "BoltCarrousel",
  children,
}) {
  if (!Number.isInteger(slides) || slides <= 0) {
    console.error("The 'slides' prop must be a positive integer.");
    return null;
  }

  const uniqueId = id || `carousel-${uuidv4()}`;

  return (
    <div
      className="carousel"
      id={uniqueId}
      role="region"
      aria-roledescription="carousel"
    >
      <CarrouselInner>{children}</CarrouselInner>
      <Indicators slides={slides} carouselId={uniqueId} />
      <Controls carouselId={uniqueId} />
    </div>
  );
}

Carrousel.propTypes = {
  slides: PropTypes.number,
  id: PropTypes.string,
  children: PropTypes.node,
};
