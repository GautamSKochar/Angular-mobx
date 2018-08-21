import { observable, action, computed } from 'mobx-angular';
// import { Injectable } from '../../../node_modules/@angular/core';

export class Store {
  @observable value;
  @observable name;
  constructor(name) {this.name = name; }

  @action setValue(value: any) {
    this.value = value;
  }

  @computed get objValue() {
    console.log('computed');
    return this.name;
  }

} 

export const store = new Store('Gautam');
// window['state'] = store;