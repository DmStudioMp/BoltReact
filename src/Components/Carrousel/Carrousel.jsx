import React from "react";
import PropTypes from "prop-types";
import "./Carrousel.css";

import Indicators from "./Indicators/Indicators.jsx";
import Controls from "./Controls/Controls.jsx";
import Slides from "./Slides/Slides.jsx"; // Asegúrate de tener el componente Slides
import { v4 as uuidv4 } from "uuid";

function CarrouselInner({ children }) {
  return <div className="carousel-inner">{children}</div>;
}

CarrouselInner.propTypes = {
  children: PropTypes.node.isRequired,
};

/* Carrousel Component */
const Carrousel = ({ slides = [], id, children }) => {
  if (slides.length === 0) return null;

  const uniqueId = id || uuidv4();

  return (
    <div className="carousel" id={uniqueId}>
      <CarrouselInner>
        <Slides slides={slides} />
      </CarrouselInner>
      <Indicators slides={slides} carouselId={uniqueId} />
      <Controls carouselId={uniqueId} />
      {children && <div className="extra-content">{children}</div>}
    </div>
  );
};

Carrousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      content: PropTypes.node,
    })
  ).isRequired,
  children: PropTypes.node,
  id: PropTypes.string,
};

Carrousel.defaultProps = {
  slides: [],
  id: null,
  children: null,
};

export default Carrousel;
