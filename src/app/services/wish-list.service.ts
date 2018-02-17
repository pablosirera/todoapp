import { Injectable } from '@angular/core';
import { List } from '../classes/lists';


@Injectable()
export class WishListService {
  lists: List[] = [];
  inbox: string = 'Bandeja de entrada';

  constructor() {
    this.getDataFromLocalStorage();
    this.initData();
  }

  initData() {
    let isListDefaultAdded = this.lists.find(list => {
      return list.name === this.inbox;
    });
    if (!isListDefaultAdded) {
      let list = new List(this.inbox);
      this.addList(list);
    }

  }

  setDataOnLocalStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  getDataFromLocalStorage() {
    const dataLocalStorage = localStorage.getItem('data');
    if ( dataLocalStorage ) {
      this.lists = JSON.parse(dataLocalStorage);
    }
  }

  addList( list: List) {
    if (this.isListOnData(list)) {
      return;
    }
    this.lists.push(list);
    this.setDataOnLocalStorage()
  }

  isListOnData(list) {
    const nameList = list.name;
    return this.lists.forEach((element) => {
      return element.name === nameList;
    });
  }

  removeList(idx: number) {
    this.lists.splice(idx, 1);
    this.setDataOnLocalStorage();
  }
}