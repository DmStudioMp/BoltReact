"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideImg = SlideImg;
exports["default"] = Slide;
var _react = _interopRequireDefault(require("react"));
/* Slide with Image Placeholder */
function SlideImg() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: "bd-placeholder-img",
    width: "100%",
    height: "100%",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    preserveAspectRatio: "xMidYMid slice",
    focusable: "false"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "#777"
  }));
}

/* Single Slide */
function Slide(props) {
  var status = props.active ? "active" : "";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "carousel-item ".concat(status)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-block w-100"
  }, children));
}