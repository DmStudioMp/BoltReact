"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateInput = DateInput;
exports.EmailInput = EmailInput;
exports.FieldInput = FieldInput;
exports.ImageInput = ImageInput;
exports.NumberInput = NumberInput;
exports.OptionsInput = OptionsInput;
exports.PasswordInput = PasswordInput;
exports.SubmitButton = SubmitButton;
exports.TextInput = TextInput;
exports.TitleContainer = TitleContainer;
exports["default"] = Forms;
var _react = _interopRequireDefault(require("react"));
require("./styles/Forms.css");
/* ------------------------------------------ Inputs -----------------------------------------------------------*/

function TextInput(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-floating container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    id: props.id,
    placeholder: props.text,
    onChange: props.change
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: props.id
  }, props.text_label));
}
function OptionsInput(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-fluid m-2"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: props.id,
    className: "form-label"
  }, props.text_label), /*#__PURE__*/_react["default"].createElement("select", {
    id: props.id,
    onChange: props.change
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "Choose from list"), props.options.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: index,
      value: item
    }, item);
  })));
}
function NumberInput(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-floating container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    id: props.id,
    className: "form-control",
    onChange: props.change,
    placeholder: props.text_input
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: props.id
  }, props.text_label));
}
function PasswordInput(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-floating container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "password",
    className: "form-control",
    id: props.id,
    onChange: props.change,
    autoComplete: "current-password",
    placeholder: props.text_input
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: props.id
  }, props.text_label));
}
function EmailInput(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-floating container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    className: "form-control",
    id: props.id,
    placeholder: "name@example.com",
    onChange: props.change
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: props.id
  }, "Email"));
}
function ImageInput(props) {
  return /*#__PURE__*/_react["default"].createElement("img", {
    id: props.id,
    className: "mb-4 d-flex rounded-circle",
    src: props.img,
    alt: "",
    width: "72",
    height: "57"
  });
}
function TitleContainer(props) {
  return /*#__PURE__*/_react["default"].createElement("h1", {
    className: "h3 mb-3 fw-normal"
  }, props.text);
}
function DateInput(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "date-input",
    className: "form-floating container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "date",
    className: "form-control",
    id: props.id,
    name: "".concat(props.id, "input"),
    placeholder: props.text,
    onChange: props.change
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: props.id
  }, props.text_label));
}
function SubmitButton(props) {
  return /*#__PURE__*/_react["default"].createElement("button", {
    id: props.id,
    className: "w-100 btn btn-lg btn-dark m-1",
    type: "submit",
    onClick: props.callback
  }, props.text);
}
function FieldInput(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-label",
    htmlFor: props.id
  }, props.text_label), /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-control",
    id: props.id,
    name: "".concat(props.id, "input"),
    type: "file",
    onChange: props.change
  }));
}

/* ------------------------------------------ Forms -----------------------------------------------------------*/
function Forms(props) {
  return /*#__PURE__*/_react["default"].createElement("form", {
    id: props.id,
    className: " p-1 d-flex flex-column container-fluid align-items-center justify-content-center",
    onSubmit: props.onSubmit
  }, props.children);
}