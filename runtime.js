const { JSDOM } = require('jsdom');

const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
const document = dom.window.document;

class ActionComponent {
    constructor() {
        this.state = {};
        this.element = document.createElement('div');
    }

    mount(parent) {
        parent.appendChild(this.element);
    }

    setContent(content) {
        this.element.innerHTML = content;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.update();
    }

    bind(callback) {
        callback(this.state);
    }

    update() {
        // Re-render the component
        this.element.innerHTML = '';
        render(this.render(), this.element);
    }

    render() {
        // Override this method in subclasses
        return createElement('div', {}, 'Override render method');
    }
}

function createComponent() {
    return new ActionComponent();
}

module.exports = {
    createComponent,
    ActionComponent,
    document // Export document for use in main.js
};
