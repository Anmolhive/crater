# EditStudent Component

The `EditStudent` component is a React component used for editing student information. It provides a user interface for updating details such as name, mobile number, email, date of birth, gender, address, and course. Additionally, it includes a feature for displaying success or error alerts to the user.

## Installation

To use the `EditStudent` component in your React project, follow these steps:

1. Make sure you have React set up in your project.

2. Copy the `EditStudent` component code provided above and save it in a file (e.g., `EditStudent.js`).

3. Import the `EditStudent` component in your application where you want to use it.

4. Use the `EditStudent` component in your code by passing the required `data`, `onClose`, and `onUpdate` props.

Example usage:

```javascript
import React from "react";
import EditStudent from "./EditStudent"; // Import the EditStudent component

function MyComponent() {
  return (
    <div>
      <EditStudent
        data={/* Student data */}
        onClose={/* Function to close the EditStudent component */}
        onUpdate={/* Function to handle updates */}
      />
    </div>
  );
}

export default MyComponent;
```

## Features

The `EditStudent` component offers the following features:

1. Form Input Fields: It provides input fields for editing student information, including full name, mobile number, email, date of birth, gender, address (street, city, state, and pincode), and course.

2. Data Pre-Population: The input fields are pre-populated with existing student data, making it convenient for editing.

3. Real-Time Validation: Real-time input validation is implemented for name, mobile number, and email fields, providing visual feedback to the user.

4. Date of Birth Restriction: The date of birth field is restricted to a maximum age of 15 years from the current date.

5. Radio Buttons for Gender: Users can select the gender using radio buttons (Male/Female).

6. Address Input: The address section includes input fields for street, city, state, and pincode.

7. Course Dropdown: The "Course" field is implemented as a dropdown with multiple course options.

8. Submit Button: The "Update Student" button allows users to submit the edited information for updating the student's details.

9. Error Handling: Error messages are displayed to the user in case of form validation issues or submission errors.

10. Success Alert: After successful data submission, a success alert is displayed to confirm that the student's information has been updated.

## Customization

You can customize the appearance and behavior of the `EditStudent` component to match your application's requirements. Here are some ways you can customize it:

- Adjust input validation rules: Modify the regular expressions and validation logic in the `handelNameChange`, `handelMobileChange`, and `handleEmailChange` functions to match your validation requirements.

- Customize course options: You can modify the course options in the dropdown to match the available courses in your application.

- Styling: Customize the CSS classes and styles in the component to match your application's visual design.

- Add additional fields: If your application requires additional student details, you can extend the form by adding more input fields.

## Notes

- The `EditStudent` component is designed for editing student information, so make sure to use it in a context where student data is available.

- Handle the `onClose` and `onUpdate` props to implement the desired behavior when closing the edit form and when successfully updating student information.

- Error handling and validation logic can be further improved or customized based on your application's requirements.

Feel free to adapt and customize the component to suit your application's needs and design preferences.