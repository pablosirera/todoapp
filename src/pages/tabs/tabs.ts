import { Component } from '@angular/core';

import { ListsPage } from '../lists/lists';
import { FinishedPage } from '../finished/finished';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = ListsPage;
  tab2Root: any = FinishedPage;

  constructor() {

  }
}
