import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WishListService } from '../../app/services/wish-list.service';
import { AddPage } from '../add/add';
import { DetailListPage } from '../detail-list/detail-list';


@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html',
})
export class PendingPage {

  constructor(public navCtrl: NavController, private _wishList: WishListService) {}

  goToAdd() {
    this.navCtrl.push(AddPage);
  }

  seeDetails(list: any, index: number) {
    this.navCtrl.push(DetailListPage, {list, index});
  }
}
