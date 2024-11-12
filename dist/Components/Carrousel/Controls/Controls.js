"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Controls;
var _react = _interopRequireDefault(require("react"));
function Controls(_ref) {
  var id = _ref.id;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    className: "carousel-control-prev",
    type: "button",
    "data-bs-target": "#".concat(id),
    "data-bs-slide": "prev"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "visually-hidden"
  }, "Previous")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "carousel-control-next",
    type: "button",
    "data-bs-target": "#".concat(id),
    "data-bs-slide": "next"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "visually-hidden"
  }, "Next")));
}