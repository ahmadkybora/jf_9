export class Component extends HTMLElement {
    constructor(props) {
        super();
        // this.props = props;

    }

    // پارامتر اول برای نام کامپوننت
    // و پارامتر دوم برای کلاس مورد نظر میباشد
    static create = (name, component) => {
        window.customElements.define(name, component);
    }
}