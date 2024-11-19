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
  children: PropTypes.node.isRequired,
};

/* Carrousel Component */
export default function Carrousel(props) {
  const slides = props.slides;
  const children = props.children;
  const id = props.id || `carousel-${uuidv4()}`;

  return (
    <div
      id={id}
      className="carousel slide"
      data-bs-ride="carousel"
      aria-label="Image Carousel"
    >
      <Indicators indicators={slides} id={id} />
      <CarrouselInner>{children}</CarrouselInner>
      <Controls id={id} />
    </div>
  );
}

Carrousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

Carrousel.defaultProps = {
  slides: [],
  id: null,
};
