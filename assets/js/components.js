// components.js
const componentTemplates = {
  text: {
    type: "text",
    content: "Edit this text",
    styles: {
      fontSize: "16px",
      color: "#333",
      padding: "10px",
      textAlign: "left"
    }
  },
  image: {
    type: "image",
    src: "https://via.placeholder.com/600x200",
    styles: {
      padding: "10px",
      textAlign: "center"
    }
  },
  button: {
    type: "button",
    text: "Click Me",
    url: "#",
    styles: {
      backgroundColor: "#007BFF",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      textAlign: "center"
    }
  }
};

function getComponentTemplate(type) {
  return JSON.parse(JSON.stringify(componentTemplates[type]));
}
