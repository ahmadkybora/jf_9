import Index from './index.html';
import { setupShadow } from '../initialComponents';
import { Component } from '../Component';

export class Posts extends Component {
    constructor() {
        super();

        setupShadow(this, Index);
    }
}

Component.create("c-posts", Posts);