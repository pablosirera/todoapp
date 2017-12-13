import { Component } from '@angular/core';

import { PendingPage } from '../pending/pending';
import { FinishedPage } from '../finished/finished';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = PendingPage;
  tab2Root: any = FinishedPage;

  constructor() {

  }
}
