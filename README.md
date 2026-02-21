# 🔐 Password Generator

A modern and responsive password generator built with React. This application allows users to generate secure, customizable passwords based on selected criteria such as length, numeric characters, and special symbols. It demonstrates efficient use of React hooks and clean UI design.

---

## 🚀 Overview

This project provides a simple yet effective solution for generating strong passwords. It focuses on:

- Secure password generation logic
- Dynamic UI updates using React hooks
- Clean and maintainable component structure
- Responsive design for better user experience

---

## ✨ Features

- 🔑 Generate strong random passwords
- 🎚 Adjustable password length (8–20 characters)
- 🔢 Option to include numbers
- 🔣 Option to include special characters
- 📋 Copy password to clipboard
- ⚡ Fast and responsive UI

---

## 🛠️ Tech Stack

| Technology    | Description                          |
|--------------|--------------------------------------|
| React        | Frontend library (Hooks-based)       |
| Tailwind CSS | Utility-first CSS framework          |
| Vite         | Build tool and dev server            |

---

## 📂 Project Structure

src/
│
├── App.jsx # Main application logic
├── main.jsx # Entry point
├── index.css # Global styles (Tailwind)


---


---

## ⚙️ Installation

### 1. Clone the repository
git clone https://github.com/your-username/password-generator.git
cd password-generator

### 2. Install dependencies
npm install
### 3. Start development server
npm run dev

Open in browser:

("http://localhost:5173")
---

---
## 🧠 Application Architecture

### 1. State Management
The application uses React's built-in `useState` hook to manage the core configuration:
* **length** → Password length (number)
* **num** → Include numbers (boolean)
* **char** → Include special characters (boolean)
* **pass** → The resulting generated password



### 2. Password Generation Logic
The logic is wrapped in a `useCallback` hook to prevent unnecessary re-renders and optimize performance.

javascript
const generatePass = useCallback(() => {
  let password = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (num) str += "0123456789";
  if (char) str += "!#$%^&*()_+{}|~,.";

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * str.length);
    password += str[index];
  }

  setPass(password);
}, [length, num, char]);

---
---

## Responsibilities

Build character set dynamically based on user selection.

Generate a random string based on the defined length.

Efficiently update state using dependency tracking.

## Clipboard Functionality
Programmatic text selection and copying using the modern Clipboard API.

JavaScript
const copypass = () => {
  passref.current?.select();
  window.navigator.clipboard.writeText(pass);
};

## useRef Hook
Used to create a bridge between the React state and the DOM.

JavaScript
const passref = useRef(null);
References DOM element: Directly points to the password input field.

Improves UX: Allows for "select-all" visual feedback when the copy button is clicked.

## UI & Styling
Built using Tailwind CSS for a utility-first design approach.

Clean Layout: Card-based design centered on the screen.

Interactive: Real-time updates via range sliders and checkboxes.

Responsive: Fully optimized for mobile and desktop views.

## Limitations
 visual password strength indicator.

No forced validation for complexity (e.g., must contain one uppercase).

Clipboard API may not work in non-HTTPS environments.

## 🔮 Future Improvements
[ ] Add Password Strength Meter (Weak/Medium/Strong).

[ ] Implement Toast Notifications for copy success.

[ ] Option to exclude similar characters (e.g., i, l, 1, L, o, 0).

[ ] Dark Mode toggle.

[ ] Password History log (stored locally).

🔒 Security Note
Passwords are generated entirely on the client side. No data is sent to any server, ensuring maximum user privacy and security.

## 📄 License
This project is open-source and available under the MIT License.

## 👨‍💻 Author
Developed by Zayan Waris