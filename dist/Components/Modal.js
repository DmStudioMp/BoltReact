"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles/Modal.css");
function Modal(_ref) {
  var children = _ref.children,
    isOpen = _ref.isOpen,
    closeModal = _ref.closeModal;
  return /*#__PURE__*/_react["default"].createElement("article", {
    className: "modal ".concat(isOpen ? "is-open" : ""),
    onClick: closeModal,
    "aria-hidden": !isOpen // Mejora de accesibilidad
    ,
    role: "dialog",
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-container",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-close btn btn-dark rounded-circle",
    onClick: closeModal,
    "aria-label": "Close modal"
  }, "\u2715")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content",
    id: "modal-content"
  }, children)));
}
Modal.propTypes = {
  children: _propTypes["default"].node.isRequired,
  isOpen: _propTypes["default"].bool.isRequired,
  closeModal: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = Modal;