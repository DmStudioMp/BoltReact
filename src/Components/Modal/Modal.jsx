import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

export default function Modal({
  isOpen = false, // Valor predeterminado
  closeModal = () => {}, // Función vacía por defecto
  children = null, // Valor predeterminado para evitar errores con `children`
}) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={closeModal} aria-label="Close Modal">
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool, // Ya no es requerido, tiene un valor predeterminado
  closeModal: PropTypes.func, // Ya no es requerido, tiene un valor predeterminado
  children: PropTypes.node, // No obligatorio
};
