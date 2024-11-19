# Carrousel Component

The **Carrousel** component is a reusable and customizable image or content slider for React applications. It supports dynamic slides, navigation controls, and smooth transitions.

## Features

- **Dynamic Slides**: Easily pass an array of content or images as slides.
- **Navigation Controls**: Includes next/previous buttons and indicators.
- **Customizable**: Configure transition speed, autoplay, and more.
- **Responsive Design**: Adapts to different screen sizes.
- **Modern UI**: Smooth animations and hover effects.

## Installation

### Using npm

```bash
npm install boltreact
```

## Manual Import

Copy the Carrousel.jsx and Carrousel.css files into your project and import them as needed.

## Usage

### Basic Example

```jsx
import React from "react";
import Carrousel from "./components/Carrousel/Carrousel";

const App = () => {
  const slides = [
    {
      id: 1,
      content: <img src="https://via.placeholder.com/600x300" alt="Slide 1" />,
    },
    {
      id: 2,
      content: <img src="https://via.placeholder.com/600x300" alt="Slide 2" />,
    },
    {
      id: 3,
      content: <img src="https://via.placeholder.com/600x300" alt="Slide 3" />,
    },
  ];

  return <Carrousel slides={slides} autoplay={true} interval={3000} />;
};

export default App;
```

## Props

| Prop            | Type   | Default  | Description                                                         |
| --------------- | ------ | -------- | ------------------------------------------------------------------- |
| slides          | array  | Required | An array of slide objects, each containing a unique id and content. |
| autoplay        | bool   | false    | Enables automatic slide transition.                                 |
| interval        | number | 5000     | Interval (in milliseconds) for autoplay.                            |
| showIndicators  | bool   | true     | Displays navigation indicators.                                     |
| showControls    | bool   | true     | Displays next/previous buttons.                                     |
| transitionSpeed | number | 500      | Transition speed (in milliseconds) between slides.                  |

## Styling

You can customize the carrousel's appearance by modifying the Carrousel.css file.

### Example CSS

```css
.carrousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.carrousel-slide {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carrousel-slide img {
  width: 100%;
  height: auto;
}

.carrousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.carrousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.carrousel-indicator {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.carrousel-indicator.active {
  background-color: #fff;
}
```

## Advanced Usage

### Custom Content Slides

You can pass any React components as slide content:

```jsx
const slides = [
  {
    id: 1,
    content: (
      <div style={{ backgroundColor: "red", height: "300px" }}>Slide 1</div>
    ),
  },
  {
    id: 2,
    content: (
      <div style={{ backgroundColor: "blue", height: "300px" }}>Slide 2</div>
    ),
  },
  {
    id: 3,
    content: (
      <div style={{ backgroundColor: "green", height: "300px" }}>Slide 3</div>
    ),
  },
];
```

### Custom Controls

To replace the default controls, pass a custom component:

```jsx
<Carrousel
  slides={slides}
  showControls={false}
  customControls={({ next, prev }) => (
    <div className="custom-controls">
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  )}
/>
```
