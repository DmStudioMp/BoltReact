// Modal.jsx
import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
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
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node, // No obligatorio
};

Modal.defaultProps = {
  children: "Default Content", // Contenido por defecto
};

export default Modal;
