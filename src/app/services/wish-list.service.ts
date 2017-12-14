import { Injectable } from '@angular/core';
import { List } from '../classes/lists';


@Injectable()
export class WishListService {
  lists: List[] = [];

  constructor() {
    let list1 = new List( 'Compras de supermercado' );
    let list2 = new List( 'Juegos deseados' );
    let list3 = new List( 'Cosas de la universidad' );

    this.lists.push(list1);
    this.lists.push(list2);
    this.lists.push(list3);

    console.log('Service WishListService');
  }
}