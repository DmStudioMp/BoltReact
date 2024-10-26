import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

function Modal({ children, isOpen, closeModal }) {
  return (
    <article
      className={`modal ${isOpen ? "is-open" : ""}`}
      onClick={closeModal}
      aria-hidden={!isOpen} // Mejora de accesibilidad
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-content"
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button
            className="modal-close btn btn-dark rounded-circle"
            onClick={closeModal}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="modal-content" id="modal-content">
          {children}
        </div>
      </div>
    </article>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
