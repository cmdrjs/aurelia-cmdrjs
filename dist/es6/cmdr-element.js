import Shell from 'cmdrjs/cmdrjs'
import {customElement, bindable, inject} from 'aurelia-framework';

@customElement('cmdr')
@inject(Element)
export class CmdrElement {
    constructor(element) {
        this.element = element;
        this.shell = null;
    }

    attached() {
        this.shell = new Shell(this.element);
    }
    
    detached() {
        this.shell.dispose();
    }
}