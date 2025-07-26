// builder.js
let layout = [];

function allowDrop(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  const type = e.dataTransfer.getData("componentType") || e.target.dataset.type;
  const component = getComponentTemplate(type);
  layout.push(component);
  updateCanvas();
}

document.querySelectorAll(".component").forEach(el => {
  el.addEventListener("dragstart", e => {
    e.dataTransfer.setData("componentType", e.target.dataset.type);
  });
});

function updateCanvas() {
  const canvas = document.getElementById("canvas");
  canvas.innerHTML = "<h3>Email Canvas</h3>";
  layout.forEach((component, index) => {
    const div = document.createElement("div");
    div.innerHTML = renderComponent(component);
    div.classList.add("component-wrapper");
    div.onclick = () => editProperties(component, index);
    canvas.appendChild(div);
  });
}

function editProperties(component, index) {
  const container = document.getElementById("properties");
  container.innerHTML = "";
  if (component.type === "text") {
    const textarea = document.createElement("textarea");
    textarea.value = component.content;
    textarea.oninput = e => {
      component.content = e.target.value;
      updateCanvas();
    };
    container.appendChild(textarea);
  }

  if (component.type === "button") {
    const input = document.createElement("input");
    input.value = component.text;
    input.oninput = e => {
      component.text = e.target.value;
      updateCanvas();
    };
    container.appendChild(input);

    const urlInput = document.createElement("input");
    urlInput.value = component.url;
    urlInput.placeholder = "URL";
    urlInput.oninput = e => {
      component.url = e.target.value;
      updateCanvas();
    };
    container.appendChild(urlInput);
  }
}

document.getElementById("export-btn").onclick = () => {
  const html = layout.map(renderComponent).join("/n");
  document.getElementById("output").value = `<!DOCTYPE html><html><body>${html}</body></html>`;
};