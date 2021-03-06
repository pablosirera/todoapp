import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WishListService } from "../../app/services/wish-list.service";
import { DetailListPage } from '../detail-list/detail-list';

@Component({
  selector: 'page-finished',
  templateUrl: 'finished.html',
})
export class FinishedPage {
  lists: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _wishList: WishListService
  ) {
      this.lists = this._wishList.lists;
    }

  seeDetails(list: any, index: number) {
    this.navCtrl.push(DetailListPage, {list, index});
  }

}
