import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { List, ListItem } from '../../app/classes/classes';
import { WishListService } from '../../app/services/wish-list.service';

@Component({
  selector: 'page-detail-list',
  templateUrl: 'detail-list.html',
})
export class DetailListPage {
  form:FormGroup;
  idx:number;
  list:any;
  nameItem: string;
  items: ListItem[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _wishList: WishListService,
    public alertCtrl: AlertController
  ) {
    this.idx = this.navParams.get('index');
    this.list = this.navParams.get('list');
    this.items = this.list.items;
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({'task': new FormControl('', [])});
  }

  completeItem(item: ListItem) {
    item.complete = !item.complete;

    let allChecked = true;
    for (let item of this.list.items) {
      if (!item.complete) {
        allChecked = false;
        break;
      }
    }
    this.list.finished = allChecked;
    this._wishList.setDataOnLocalStorage();
  }

  saveItems() {
    const valueTask = this.form.controls['task'].value;
    if (!valueTask) return;
    let item = new ListItem();
    item.name = valueTask;

    this.addItemsOnList(item);
    this.form.reset();
  }

  addItemsOnList(item: ListItem) {
    this.items.push(item);
    if (this.list.items === undefined) this.list.items = this.items;
    this._wishList.setDataOnLocalStorage();
  }

  removeItem() {
    let alert = this.alertCtrl.create({
      title: `¿Deseas realmente eliminar la lista ${this.list.name}?`,
      message: 'Si la elimina no podrá acceder a ella.',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this._wishList.removeList(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

}
