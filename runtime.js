// runtime.js
class ActionComponent {
    constructor() {
        this.element = document.createElement('div');
    }

    mount(parent) {
        parent.appendChild(this.element);
    }

    setContent(content) {
        this.element.innerHTML = content;
    }
}

function createComponent() {
    return new ActionComponent();
}

module.exports = {
    createComponent
};
