import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';
import { List, ListItem } from '../../app/classes/classes';

import { WishListService } from '../../app/services/wish-list.service';

@Component({
  selector: 'page-modal-create-list',
  templateUrl: 'modal-create-list.html',
})
export class ModalCreateListPage {

  nameList: string = "";
  nameItem: string = "";
  nameListDefault: string = 'Nueva Lista';

  items: ListItem[] = [];

  constructor(
    public viewCtrl: ViewController,
    public _wishList: WishListService,
    public alertCtrl: AlertController
  ) {}

  dismiss() {
    this.viewCtrl.dismiss();
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
    this.dismiss();
  }

}
