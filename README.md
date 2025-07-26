## Table of contents

- [Overview](#overview)
  - [User Story](#user-story)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Highlights](#highlights)
  - [Useful resources](#useful-resources)
  - [Continued Development](#continued-development)
- [Author](#author)

## Overview


| Task                       | Status |
| -------------------------- | ------ |
| Basic HTML layout          | ☐      |
| Drag/drop working          | ☐      |
| At least 3 component types | ☐      |
| Editable properties        | ☐      |
| Live preview               | ☐      |
| Export HTML file           | ☐      |


### User story

A drag-and-drop email builder so that non-technical users (such as marketing or operations staff) can build responsive, production-ready HTML emails without writing any code. This tool will allow users to add, customize, and rearrange components like text blocks, images, and buttons in a visual interface, and export the result as a clean, client-compatible HTML email.

By providing an easy-to-use, customizable interface, this builder will ensure design consistency, improve team productivity, and help preserve quality email practices even as technical resources shift.

  Drag-and-drop components (text, image, button, etc.)

  Customization options (edit text, colors, padding, etc.)

  Live preview

  Output clean HTML (inline styles + table layout)


### Screenshot

![](./screenshot.jpg)
![](./screenshot.jpg)


### Links

- Solution URL: [Github Repository](https://github.com/SteveNoyes/clv)
- Live Site URL: [Github Pages](https://stevenoyes.github.io/clv/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### Highlights

email-builder/
│
├── index.html
├── styles.css
├── builder.js
├── components.js
├── renderer.js
├── helpers.js
└── templates/
    ├── text.json
    ├── image.json
    ├── button.json


index.html
  Base HTML structure

  Sidebar for components

  Main canvas to drop components

  Properties panel for editing

styles.css
  Grid layout for sidebar/canvas/properties

  Component style previews

  Responsive design for mobile editing

builder.js
  Handles:

  Drag and drop logic (using native JS dragstart, dragover, drop)

  Component insertion into the canvas

  Selecting components to edit

components.js
  Defines the component types (text, image, button, divider, etc.)

  Each component is defined by:

  Default JSON

  Editable properties

  HTML rendering function

renderer.js
  Converts the layout JSON into:

  A live preview (<iframe> or preview div)

  Final inline-styled HTML (for export)

helpers.js
  Utility functions: ID generation, inline style builder, deep clone, etc.

templates/*.json
  Optional: save components or layouts for reuse

```html

```
```css

```
```js

```

### Useful resources

- [resource](https://www..com) - 
- [resource](https://www..com) - 

### Continued Development

Feature                    Description

Live preview	             Show output as the user types or edits
Templates	                 Save/load entire layouts
Duplicate components	     One-click duplicate
Undo/Redo	                 Use a history stack
Lock zones	               Lock header/footer from editing
Mobile/Desktop toggle	     Adjust preview area size
Component library	         Define new components from JSON

## Author

- Website - [Steven Noyes](https://www.stevenmnoyes.com)