import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-component',
  templateUrl: './ui-component.component.html',
  styleUrls: ['./ui-component.component.scss']
})
export class UiComponentComponent {

  public open : boolean = false;

  openMenu() {
    this.open =! this.open
  }
}
