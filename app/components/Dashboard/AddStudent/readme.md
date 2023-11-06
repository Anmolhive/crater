# AddStudent Component

The `AddStudent` component is a React component that is designed to collect and submit information about a student, including their personal details and course selection. It also provides real-time validation of input fields and displays an alert message upon form submission.

## Installation

To use the `AddStudent` component in your React project, follow these steps:

1. Make sure you have React set up in your project.

2. Copy the `AddStudent` component code provided above and save it in a file (e.g., `AddStudent.js`).

3. Import the `AddStudent` component in your application where you want to use it.

4. Use the `AddStudent` component in your code as needed.

Example usage:

```javascript
import React from "react";
import AddStudent from "./AddStudent"; // Import the AddStudent component

function MyComponent() {
  return (
    <div>
      <AddStudent />
    </div>
  );
}

export default MyComponent;
```

## Features

The `AddStudent` component offers the following features:

1. Input Validation: The component performs real-time validation on various input fields to ensure that the data provided is valid. It checks the following fields:
   - Full Name: Accepts alphabetic characters, spaces, dots, single quotes, and hyphens.
   - Mobile Number: Requires exactly 10 digits.
   - Email: Validates whether the input is a valid email address.
   - Pincode: Requires exactly 6 digits.

2. Date of Birth Selection: Users can select a date of birth using the date input field. The maximum date allowed is set to 15 years ago from the current date.

3. Gender Selection: Users can choose their gender from the "Male" or "Female" radio buttons.

4. Address Details: The component collects address details, including street, city, state, and pincode.

5. Course Selection: Users can select their desired course from a dropdown list.

6. Alert Message: After successful submission of the form, an alert message is displayed to inform the user. The alert message can have different colors, such as success, error, warning, or information.

7. Form Submission: Upon form submission, the data is sent to a server API using a POST request with the collected student information in JSON format.

## Customization

You can customize the component's appearance and functionality to match your application's design and requirements. The CSS classes, form structure, and validation logic can be modified as needed.

## Notes

- Make sure to implement the server-side API endpoint for handling form submissions as per your application's requirements.
- You can modify the list of available courses by updating the values in the dropdown list.

Feel free to adapt and customize the component to suit your application's needs.