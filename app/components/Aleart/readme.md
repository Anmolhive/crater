# Alert Component

This is a React component that provides an alert message with customizable colors and an optional close button. The component is designed to display alerts for different types of messages, such as success, error, warning, and information, based on the provided `color` prop. Users can close the alert using the close button, which triggers the `onClose` function when clicked.

## Installation

To use this component in your React project, follow these steps:

1. Make sure you have React set up in your project.

2. Copy the `Aleart` component code provided above and save it in a file (e.g., `Aleart.js`).

3. Import the `Aleart` component in your application where you want to use it.

4. Use the `Aleart` component in your code by passing the required props: `children`, `color`, and `onClose`.

Example usage:

```javascript
import React from "react";
import Aleart from "./Aleart"; // Import the Aleart component

function MyComponent() {
  const handleClose = () => {
    // Implement the close functionality here
  };

  return (
    <div>
      <Aleart color="success" onClose={handleClose}>
        This is a success alert.
      </Aleart>
    </div>
  );
}

export default MyComponent;
```

## Props

The `Aleart` component accepts the following props:

- `children` (string): The message content to be displayed in the alert.

- `color` (string): The color of the alert. It can be one of the following values:
  - "success": Green color for success messages.
  - "error": Red color for error messages.
  - "warning": Yellow color for warning messages.
  - "info": Blue color for information messages.
  - If an unsupported color is provided, it defaults to the "info" color.

- `onClose` (function): An optional callback function that is triggered when the close button is clicked. You can define custom behavior for closing the alert by implementing this function in your application.

## Customization

The component uses SVG icons and CSS classes to style the alerts and the close button. You can customize the styling to match your application's design by modifying the CSS classes and SVG icons.

## Examples

Here are some examples of how to use the `Aleart` component with different colors:

```javascript
<Aleart color="success" onClose={handleClose}>
  This is a success alert.
</Aleart>

<Aleart color="error" onClose={handleClose}>
  This is an error alert.
</Aleart>

<Aleart color="warning" onClose={handleClose}>
  This is a warning alert.
</Aleart>

<Aleart color="info" onClose={handleClose}>
  This is an information alert.
</Aleart>
```

Feel free to adapt and customize the component to suit your application's needs.