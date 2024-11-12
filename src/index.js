// Importa Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Carga dinámica de componentes individuales
const loadCarrousel = () => import("./Components/Carrousel/Carrousel.jsx");
const loadSlide = () => import("./Components/Carrousel/Slides/Slides.jsx");
const loadControls = () =>
  import("./Components/Carrousel/Controls/Controls.jsx");
const loadIndicators = () =>
  import("./Components/Carrousel/Indicators/Indicators.jsx");
const loadForms = () => import("./Components/Forms.jsx");
const loadModal = () => import("./Components/Modal.jsx");
const loadUseModal = () => import("./Components/UseModal.js");

// Almacena las promesas de carga en un objeto
const components = {
  Carrousel: loadCarrousel(),
  Slide: loadSlide(),
  Controls: loadControls(),
  Indicators: loadIndicators(),
  Forms: loadForms(),
  Modal: loadModal(),
  useModal: loadUseModal(),
};

// Exportar componentes de forma dinámica
export const SlideImg = components.Slide.then((module) => module.SlideImg);
export const TextInput = components.Forms.then((module) => module.TextInput);
export const OptionsInput = components.Forms.then(
  (module) => module.OptionsInput
);
export const NumberInput = components.Forms.then(
  (module) => module.NumberInput
);
export const PasswordInput = components.Forms.then(
  (module) => module.PasswordInput
);
export const EmailInput = components.Forms.then((module) => module.EmailInput);
export const ImageInput = components.Forms.then((module) => module.ImageInput);
export const TitleContainer = components.Forms.then(
  (module) => module.TitleContainer
);
export const DateInput = components.Forms.then((module) => module.DateInput);
export const SubmitButton = components.Forms.then(
  (module) => module.SubmitButton
);
export const FieldInput = components.Forms.then((module) => module.FieldInput);

// Exportar como default el conjunto de componentes
export default {
  ...components,
  SlideImg,
  TextInput,
  OptionsInput,
  NumberInput,
  PasswordInput,
  EmailInput,
  ImageInput,
  TitleContainer,
  DateInput,
  SubmitButton,
  FieldInput,
};
