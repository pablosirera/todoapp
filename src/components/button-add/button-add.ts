import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-add',
  templateUrl: 'button-add.html'
})
export class ButtonAddComponent {
  @Output() onClickButton = new EventEmitter();
  text: string;

  constructor() {
    console.log('Hello ButtonAddComponent Component');
    this.text = 'Hello World';
  }

  onClickFab() {
    this.onClickButton.emit();
  }
}
