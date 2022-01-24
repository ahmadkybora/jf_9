import Index from './index.html';
import { setupShadow } from '../initialComponents';
import { Component } from '../Component';

export class Users extends Component {
    template = document.querySelector("template").content;
    constructor() {
        super();
        this.setupShadow();

        const b = this.template.querySelector('button').attributes;
        console.log(b);
        this.template.addEventListener("click", function() {
            this.template.document.querySelector("p").innerHTML = "Hello World";
        });
    }

    setupShadow() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.template.cloneNode(true));
    }
}

Component.create("c-users", Users);