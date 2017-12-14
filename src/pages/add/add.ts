import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  nameList: string;
  nameItem: string;
  nameListDefault: string = 'Nueva Lista';

  constructor(public navCtrl: NavController) {
  }

}
