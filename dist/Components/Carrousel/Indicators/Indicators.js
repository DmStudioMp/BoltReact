"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Indicators;
var _react = _interopRequireDefault(require("react"));
function Indicators(_ref) {
  var indicators = _ref.indicators,
    id = _ref.id;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "carousel-indicators justify-content-center"
  }, indicators.map(function (slide, index) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: index,
      type: "button",
      "data-bs-target": "#".concat(id),
      "data-bs-slide-to": index,
      className: slide.status ? "active" : "",
      "aria-current": slide.status ? "true" : undefined,
      "aria-label": "Slide ".concat(index + 1)
    });
  }));
}