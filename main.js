// main.js
const { createComponent } = require('./runtime');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Compile the ActionJS component
execSync('node compiler.js example.action example.js');

// Load the compiled component
const componentCode = fs.readFileSync('example.js', 'utf-8');

// Create and mount the component
const component = createComponent();
component.setContent(componentCode);
component.mount(document.body);
