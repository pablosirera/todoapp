import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { WishListService } from '../../app/services/wish-list.service';
import { DetailListPage } from '../detail-list/detail-list';
import { ModalCreateListPage } from '../modal-create-list/modal-create-list';


@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  constructor(
    public navCtrl: NavController,
    private _wishList: WishListService,
    private modalCtrl: ModalController
  ) {}

  openModal() {
    let modal = this.modalCtrl.create(ModalCreateListPage);
    modal.present();
    // this.navCtrl.push(AddPage);
  }

  seeDetails(list: any, index: number) {
    this.navCtrl.push(DetailListPage, {list, index});
  }
}
