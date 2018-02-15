import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: 'main-header.html'
})
export class MainHeaderComponent {

  @Input('textTitle') textTitle;
  text: string;

  constructor() {
  }

}
