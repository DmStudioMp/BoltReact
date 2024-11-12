import React from "react";
import "../styles/Carrousel.css";

import Indicators from "./Indicators/Indicators.jsx";
import Controls from "./Controls/Controls.jsx";

function CarrouselInner({ children }) {
  return <div className="carousel-inner">{children}</div>;
}

/* Carrousel Component */
export default function Carrousel({ id, slides, children }) {
  return (
    <div id={id} className="carousel slide " data-bs-ride="carousel">
      <Indicators indicators={slides} id={id} />
      <CarrouselInner>{children}</CarrouselInner>
      <Controls id={id} />
    </div>
  );
}
