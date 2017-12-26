import { Injectable } from '@angular/core';
import { List } from '../classes/lists';


@Injectable()
export class WishListService {
  lists: List[] = [];

  constructor() {
    this.getDataFromLocalStorage();
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
    this.lists.push(list);
    this.setDataOnLocalStorage()
  }

  removeList(idx: number) {
    this.lists.splice(idx, 1);
    this.setDataOnLocalStorage();
  }
}