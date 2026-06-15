# React useState & Form Handling Project

## Overview

This project demonstrates the implementation of React **useState hook** and **form handling with state management** using reusable components.

## Tasks Implemented

# Task 1: Five useState Examples

Five separate components were created to demonstrate different use cases of the `useState` hook.

---

## 1. Counter Component

File: `Counter.jsx`

### Features:
- Increment counter value
- Decrement counter value
- Reset counter value

### Concepts:
- Number state
- Button click events
- State updates

---

## 2. Toggle Component

File: `Toggle.jsx`

### Features:
- Show and hide content using a button

### Concepts:
- Boolean state
- Conditional rendering

---

## 3. Input Example Component

File: `InputExample.jsx`

### Features:
- Takes user input
- Displays entered text dynamically

### Concepts:
- Input handling
- onChange event
- String state

---

## 4. Color Changer Component

File: `ColorChanger.jsx`

### Features:
- Changes displayed color using buttons

### Concepts:
- Dynamic state updates
- UI updates using state

---

## 5. Like Button Component

File: `LikeButton.jsx`

### Features:
- Increases like count when clicked

### Concepts:
- Numeric state
- Event handling

---

# Task 2: Form Handling Component

File: `FormHandling.jsx`

A separate component was created to demonstrate form handling with 3 input fields and proper state management.

## Input Fields:

- Name
- Email
- Password

## Features:

- Controlled input fields
- Single state object
- Dynamic form updates
- Form submission handling

Example state:

```javascript
const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
});
```

The input values are managed using:

```javascript
onChange={handleChange}
```

and updated using:

```javascript
setFormData()
```

---


# Author

Gunjan Joshi
