import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WishListService } from '../../app/services/wish-list.service';


@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html',
})
export class PendingPage {

  constructor(public navCtrl: NavController, private _wishList: WishListService) {}

}
