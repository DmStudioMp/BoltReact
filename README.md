# BoltReact

⚡ **BoltReact** – Speed up your UI development with powerful and reusable React components! ⚡

[![NPM Version](https://img.shields.io/npm/v/boltreact)](https://www.npmjs.com/package/boltreact)
[![License](https://img.shields.io/npm/l/boltreact)](https://github.com/DmStudioMp/boltreact/blob/main/LICENSE)
[![Build Status](https://img.shields.io/travis/com/DmStudioMp/boltreact)](https://travis-ci.com/DmStudioMp/boltreact)

## 🚀 Introduction

**BoltReact** is a lightweight, high-performance React component library designed to help you build sleek, responsive, and dynamic user interfaces. Whether you're creating a complex web app or a simple website, BoltReact provides you with flexible, easy-to-use components that integrate seamlessly with your project.

---

## 🌟 Features

- **Reusable Components**: Pre-built components like Carousels, Modals, Forms, and more that can easily be customized.
- **Modular Design**: Import only what you need, making your project faster and more efficient.
- **Optimized Build Configuration**:
  - Removed SCSS dependencies to streamline the build process.
  - CSS delivery optimized using `mini-css-extract-plugin`.
- **Dynamic Code Splitting**: Lazy loading enabled for core components to improve page load performance.
- **Lightweight**: Bundle size minimized by advanced Webpack optimizations.
- **Bootstrap Integration**: Modular imports for Bootstrap JS components, reducing unnecessary dependencies.

---

## 📦 Installation

You can install **BoltReact** via npm:

```bash
npm install boltreact
```

## 🔧 Usage

Get started by importing the components you need:

```jsx
import React from "react";
import { Carrousel, Modal, Forms } from "boltreact";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "bootstrap/js/dist/carousel";
import ModalBootstrap from "bootstrap/js/dist/modal";

function App() {
  return (
    <div>
      <Carrousel items={carouselItems} />
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <p>This is a modal</p>
      </Modal>
      <Forms onSubmit={handleSubmit} />
    </div>
  );
}
```

## 🛠️ Available Components

### Components

- Cards: Responsive and dynamic card components.
- Carousel: Engage users with interactive image carousels.
- Forms: Simplified form handling with built-in validation.
- Modal: Pop-up modals for content display.
- Grid System: Flexbox-based layout system for responsive designs.

## More components coming soon!

## 🎨 Customization

BoltReact provides CSS files for easy customization. You can modify the styles to fit your brand’s design by overriding the default classes in your own stylesheet.

```css
/* Example: Override Modal styles */
.boltreact-modal {
  background-color: #333;
  color: #fff;
}
```

## 📖 Documentation

Detailed documentation and examples are available in the Wiki.

## 💡 Contributing

We welcome contributions! Check out our contributing guide to get started, and feel free to open issues or pull requests.

## 🛡️ License

This project is licensed under the MIT License. See the LICENSE file for details.

## 👨‍💻 Author

BoltReact is maintained by DmStudioMp.

## 📜 Changelog

### Version 1.1.3

- Removed SCSS support.
- Optimized Webpack configuration.
- Implemented modular imports for Bootstrap.
- Improved lazy loading and dynamic imports.
- Minimized bundle size and improved build performance.
