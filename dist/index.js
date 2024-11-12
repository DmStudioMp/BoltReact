"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TitleContainer = exports.TextInput = exports.SubmitButton = exports.SlideImg = exports.PasswordInput = exports.OptionsInput = exports.NumberInput = exports.ImageInput = exports.FieldInput = exports.EmailInput = exports.DateInput = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
require("bootstrap/dist/css/bootstrap.min.css");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != (0, _typeof2["default"])(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; } // Importa Bootstrap CSS
// Carga dinámica de componentes individuales
var loadCarrousel = function loadCarrousel() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./Components/Carrousel/Carrousel.jsx"));
  });
};
var loadSlide = function loadSlide() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./Components/Carrousel/Slides/Slides.jsx"));
  });
};
var loadControls = function loadControls() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./Components/Carrousel/Controls/Controls.jsx"));
  });
};
var loadIndicators = function loadIndicators() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./Components/Carrousel/Indicators/Indicators.jsx"));
  });
};
var loadForms = function loadForms() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./Components/Forms.jsx"));
  });
};
var loadModal = function loadModal() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./Components/Modal.jsx"));
  });
};
var loadUseModal = function loadUseModal() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./Components/UseModal.js"));
  });
};

// Almacena las promesas de carga en un objeto
var components = {
  Carrousel: loadCarrousel(),
  Slide: loadSlide(),
  Controls: loadControls(),
  Indicators: loadIndicators(),
  Forms: loadForms(),
  Modal: loadModal(),
  useModal: loadUseModal()
};

// Exportar componentes de forma dinámica
var SlideImg = exports.SlideImg = components.Slide.then(function (module) {
  return module.SlideImg;
});
var TextInput = exports.TextInput = components.Forms.then(function (module) {
  return module.TextInput;
});
var OptionsInput = exports.OptionsInput = components.Forms.then(function (module) {
  return module.OptionsInput;
});
var NumberInput = exports.NumberInput = components.Forms.then(function (module) {
  return module.NumberInput;
});
var PasswordInput = exports.PasswordInput = components.Forms.then(function (module) {
  return module.PasswordInput;
});
var EmailInput = exports.EmailInput = components.Forms.then(function (module) {
  return module.EmailInput;
});
var ImageInput = exports.ImageInput = components.Forms.then(function (module) {
  return module.ImageInput;
});
var TitleContainer = exports.TitleContainer = components.Forms.then(function (module) {
  return module.TitleContainer;
});
var DateInput = exports.DateInput = components.Forms.then(function (module) {
  return module.DateInput;
});
var SubmitButton = exports.SubmitButton = components.Forms.then(function (module) {
  return module.SubmitButton;
});
var FieldInput = exports.FieldInput = components.Forms.then(function (module) {
  return module.FieldInput;
});

// Exportar como default el conjunto de componentes
var _default = exports["default"] = _objectSpread(_objectSpread({}, components), {}, {
  SlideImg: SlideImg,
  TextInput: TextInput,
  OptionsInput: OptionsInput,
  NumberInput: NumberInput,
  PasswordInput: PasswordInput,
  EmailInput: EmailInput,
  ImageInput: ImageInput,
  TitleContainer: TitleContainer,
  DateInput: DateInput,
  SubmitButton: SubmitButton,
  FieldInput: FieldInput
});