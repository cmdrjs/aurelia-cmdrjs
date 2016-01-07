import {Shell} from 'cmdrjs'
import {customElement, bindable, inject} from 'aurelia-framework';

@customElement('cmdr')
@inject(Element)
export class CmdrElement {
    
    @bindable options = {};
    
    constructor(element) {
        this.element = element;
        this.shell = null;
    }

    attached() {
        this.shell = new Shell(this.element, this.options);
    }
    
    detached() {
        this.shell.dispose();
    }
}