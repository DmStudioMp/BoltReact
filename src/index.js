import React, { lazy, Suspense } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/modal";

// Lazy Loading de componentes personalizados
const Carrousel = lazy(() => import("./Components/Carrousel/Carrousel.jsx"));
const Controls = lazy(() =>
  import("./Components/Carrousel/Controls/Controls.jsx")
);
const Indicators = lazy(() =>
  import("./Components/Carrousel/Indicators/Indicators.jsx")
);
const Slides = lazy(() => import("./Components/Carrousel/Slides/Slides.jsx"));
const Forms = lazy(() => import("./Components/Forms/Forms.jsx"));
const CustomModal = lazy(() => import("./Components/Modal/Modal.jsx"));
const UseModal = lazy(() => import("./Components/Modal/UseModal.js"));
const GridSystem = lazy(() => import("./Components/GridSystem/GridSystem.jsx"));
const Cards = lazy(() => import("./Components/Cards/Cards.jsx"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Utiliza aquí los componentes que se cargarán de forma diferida */}
      <Carrousel>
        <Slides />
        <Controls />
        <Indicators />
      </Carrousel>
      <Forms />
      <CustomModal />
      <GridSystem />
      <Cards />
    </Suspense>
  );
}

// Exportación de todos los componentes para reutilización
export {
  Carrousel,
  Controls,
  Indicators,
  Slides,
  Forms,
  CustomModal as Modal, // Usar alias al exportar para evitar conflicto
  UseModal,
  GridSystem,
  Cards,
};
