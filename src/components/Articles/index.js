import Index from './index.html';
import { setupShadow } from '../initialComponents';
import { Component } from '../Component';

export class Articles extends Component {
    template = document.querySelector("template").content;
    constructor() {
        super();
        this.setupShadow();

        // console.log(this.template.querySelector('button'));
    }

    setupShadow() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.template.cloneNode(true));
    }
}

Component.create("c-articles", Articles);