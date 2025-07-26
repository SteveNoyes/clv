// renderer.js
function renderComponent(component) {
  const style = Object.entries(component.styles || {})
    .map(([k, v]) => `${k}:${v}`)
    .join(";");

  switch (component.type) {
    case "text":
      return `<table width=\"100%\"><tr><td style=\"${style}\">${component.content}</td></tr></table>`;
    case "image":
      return `<table width=\"100%\"><tr><td style=\"${style}\"><img src=\"${component.src}\" style=\"max-width:100%;\"></td></tr></table>`;
    case "button":
      return `<table width=\"100%\"><tr><td style=\"${style}\"><a href=\"${component.url}\" style=\"${style} text-decoration:none; display:inline-block;\">${component.text}</a></td></tr></table>`;
    default:
      return "\\";
  }
}
