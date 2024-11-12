"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useModal;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useModal() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var _useState = (0, _react.useState)(initialValue),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var openModal = function openModal() {
    return setIsOpen(true);
  };
  var closeModal = function closeModal() {
    return setIsOpen(false);
  };
  return {
    isOpen: isOpen,
    openModal: openModal,
    closeModal: closeModal
  };
}