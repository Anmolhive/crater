# Dashboard Component

The `Dashboard` component is a React component that serves as a user interface for navigating between two different sections: "Add Student" and "View Students." It provides an organized layout with buttons for switching between these sections and a content area for rendering the selected content.

## Installation

To use the `Dashboard` component in your React project, follow these steps:

1. Make sure you have React set up in your project.

2. Copy the `Dashboard` component code provided above and save it in a file (e.g., `Dashboard.js`).

3. Import the `Dashboard` component in your application where you want to use it.

4. Use the `Dashboard` component in your code by passing the required `children` and `active` props.

Example usage:

```javascript
import React from "react";
import Dashboard from "./Dashboard"; // Import the Dashboard component

function MyComponent() {
  return (
    <div>
      <Dashboard active="addStudent">
        {/* Content for the "Add Student" section */}
      </Dashboard>
    </div>
  );
}

export default MyComponent;
```

## Features

The `Dashboard` component offers the following features:

1. Navigation Buttons: The component includes two navigation buttons, "Add Student" and "View Students," which allow the user to switch between different sections of the application.

2. Active Section Indicator: The currently active section is visually indicated using the `buttonActive` style, highlighting the active button.

3. Routing: The navigation buttons are implemented as links using the `next/link` component, making it easy to handle routing and link the buttons to specific pages or components.

4. Content Area: The selected content, passed as the `children` prop, is rendered in the content area of the dashboard.

5. Custom Styling: The component includes custom CSS classes for styling, such as `bg-black`, `bg-neutral-50`, and `customScrollBar`. These styles can be customized to match your application's design.

## Customization

You can customize the appearance and behavior of the `Dashboard` component to match your application's requirements. Here are some ways you can customize it:

- Modify the navigation buttons: You can change the button text, icons, or styling to match your application's design.

- Implement routing: Adjust the links provided by the `next/link` component to point to the correct routes or components in your application.

- Customize the content area: The `children` prop allows you to render any content you like within the dashboard. You can create custom sections and components for the "Add Student" and "View Students" sections.

- Customize styling: Modify the CSS classes and styles in the component to match your application's visual design.

## Notes

- The `Dashboard` component is designed to provide a consistent user interface for navigating between different sections of your application. Make sure to implement the content for the "Add Student" and "View Students" sections as needed.

- You can integrate additional functionality and logic into the sections based on your application's requirements.

Feel free to adapt and customize the component to suit your application's needs and design preferences.