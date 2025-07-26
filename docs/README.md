A fully client-side, drag-and-drop email template builder written in vanilla JavaScript, HTML, and CSS — no libraries, frameworks, or build tools.

This tool allows you to create email layouts using common components like text, images, buttons, and more. The app exports valid, table-based HTML suitable for use in most email clients.

📋 Table of Contents
Features

Live Demo

User Story

Getting Started

Project Structure

Adding New Components

Usage Instructions

Limitations

License

✨ Features
Drag-and-drop email components

Sidebar for inserting new elements

Property panel for editing component content and styles

Live rendering of the email in a preview canvas

Export valid HTML email code (with inline styles and table layouts)

No dependencies — pure JavaScript!

👤 User Story
As a user, I want to be able to visually create email templates by dragging and dropping components like text, images, and buttons into a canvas. I want to edit each component’s properties using a side panel and export the result as valid HTML. The goal is to simplify the process of designing responsive, email-client-friendly templates without having to write all the HTML and CSS by hand.

🚀 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/email-builder.git
cd email-builder
2. Open in your browser
No build tools needed! Simply open index.html in your browser:

bash
Copy
Edit
open index.html
Or host locally with VS Code Live Server or Python:

bash
Copy
Edit
# Python 3
python -m http.server
Then navigate to http://localhost:8000.

📁 Project Structure
plaintext
Copy
Edit
email-builder/
│
├── index.html          # Main UI layout
├── style.css           # App styling
├── builder.js          # Handles drag/drop, editing, and rendering
├── components.js       # Component definitions and defaults
├── renderer.js         # Converts JSON to HTML string
└── README.md           # Documentation
🧱 Adding New Components
To add a new component:

Define it in components.js:

js
Copy
Edit
yourComponent: {
  type: "yourComponent",
  text: "Sample",
  styles: { padding: "10px" }
}
Render it in renderer.js:

js
Copy
Edit
case "yourComponent":
  return `<table><tr><td style="${style}">${component.text}</td></tr></table>`;
Add to sidebar in builder.js:

The sidebar dynamically populates from components.js, so no need to manually change HTML. Just add a new entry and reload.

Support editing in builder.js under editProperties() if needed:

js
Copy
Edit
if (component.type === "yourComponent") {
  // Add input fields for properties like `text` or `styles`
}
🧑‍💻 Usage Instructions
Drag a component (e.g., Text, Image, Button) from the sidebar into the canvas.

Click on the component in the canvas to open the editing panel.

Modify text or styles using the property inputs.

Rearrange components by dragging within the canvas.

Export the HTML using the "Export HTML" button (if implemented).

⚠️ Limitations
No email client preview — always test output in Litmus or Email on Acid

Components must be defined manually (no GUI creation yet)

Currently does not support nested rows/columns (advanced layouts)

Styling options are basic — extend manually if needed

📜 License
This project is open-source and available under the MIT License.