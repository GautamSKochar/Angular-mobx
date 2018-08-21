import { observable, computed, action } from 'mobx';
import { Injectable } from '../../../node_modules/@angular/core';

export class Framework {
    @observable checked: boolean;
    @observable name: string;

    constructor(name) {
        this.name = name;
    }

}
@Injectable()
export class Frameworks {
    @observable items: Framework[] = [
        new Framework('Angular'),
        new Framework('React'),
        new Framework('Backbone'),
        new Framework('Vue'),
        new Framework('Ember')
    ];
    @observable filter: string = '';

    constructor() {
    }

    @action setAll(value: boolean) {
        this.filteredItems.forEach((item) => item.checked = value);
    }

    @action addNew(frameworkName: string) {
        this.items.push(new Framework(frameworkName));
    }

    @computed get filteredItems(): Framework[] {
        const regexp = new RegExp(this.filter, 'i');
        console.log('calculate filteredItems');
        return this.items.filter((item) => regexp.test(item.name));
    }

    @computed get selectedItems(): Framework[] {
        return this.items.filter((item) => item.checked);
    }

    @computed get isAllChecked(): boolean {
        console.log('calculate isAllChecked');
        for (const item of this.filteredItems) {
            if (!item.checked) return false;
        }

        return true;
    }
    set isAllChecked(value: boolean) {
        this.setAll(value);
    }
}

export const frameworks = new Frameworks();
// window['framework_state'] = frameworks;
window['state'] = frameworks;