import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-button-group',
  templateUrl: './vertical-button-group.component.html',
  styleUrls: ['./vertical-button-group.component.scss']
})
export class VerticalButtonGroupComponent {

  public open : boolean = false;
  public open1 : boolean = false;
  public open2 : boolean = false;

  openMenu() {
    this.open =! this.open
  }

  openMenu1() {
    this.open1 =! this.open1
  }

  openMenu2() {
    this.open2 =! this.open2
  }
}
