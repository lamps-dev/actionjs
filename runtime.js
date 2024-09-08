// runtime.js
const { createElement, render } = require('./vdom');

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
    ActionComponent
};
