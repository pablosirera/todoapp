import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { List, ListItem } from '../../app/classes/classes';

import { WishListService } from '../../app/services/wish-list.service';


@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  nameList: string = "";
  nameItem: string = "";
  nameListDefault: string = 'Nueva Lista';

  items: ListItem[] = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public _wishList: WishListService) {}

  addItem() {
    if (this.nameItem.length === 0) return;

    let item = new ListItem();
    item.name = this.nameItem;
    this.items.push(item);
    this.nameItem = "";
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  saveList() {
    if (this.nameList.length === 0) {
      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'El nombre de la lista es necesario!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let list = new List(this.nameList);
    list.items = this.items;
    this._wishList.addList(list);
    this.navCtrl.pop();
  }

}
