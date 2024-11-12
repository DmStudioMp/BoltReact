"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Carrousel;
var _react = _interopRequireDefault(require("react"));
require("../styles/Carrousel.css");
var _Indicators = _interopRequireDefault(require("./Indicators/Indicators.jsx"));
var _Controls = _interopRequireDefault(require("./Controls/Controls.jsx"));
function CarrouselInner(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "carousel-inner"
  }, children);
}

/* Carrousel Component */
function Carrousel(_ref2) {
  var id = _ref2.id,
    slides = _ref2.slides,
    children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: id,
    className: "carousel slide ",
    "data-bs-ride": "carousel"
  }, /*#__PURE__*/_react["default"].createElement(_Indicators["default"], {
    indicators: slides,
    id: id
  }), /*#__PURE__*/_react["default"].createElement(CarrouselInner, null, children), /*#__PURE__*/_react["default"].createElement(_Controls["default"], {
    id: id
  }));
}