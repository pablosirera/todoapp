import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { List, ListItem } from '../../app/classes/classes';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  nameList: string;
  nameItem: string = "";
  nameListDefault: string = 'Nueva Lista';

  items: ListItem[] = [];

  constructor(public navCtrl: NavController) {}

  addItem() {
    if (this.nameItem.length === 0) return;

    let item = new ListItem();
    item.name = this.nameItem;
    this.items.push(item);
    this.nameItem = "";
  }

}
