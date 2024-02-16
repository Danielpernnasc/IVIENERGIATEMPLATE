import { Component } from '@angular/core';

@Component({
  selector: 'app-segmented-button',
  templateUrl: './segmented-button.component.html',
  styleUrls: ['./segmented-button.component.scss']
})
export class SegmentedButtonComponent {

  public show : boolean = false;
  public show2 : boolean = false;

  openMenu() {
    this.show =! this.show
  }

  openMenu2() {
    this.show2 =! this.show2
  }

}
