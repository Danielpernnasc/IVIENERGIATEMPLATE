import { Component } from '@angular/core';

@Component({
  selector: 'app-nesting-button-group',
  templateUrl: './nesting-button-group.component.html',
  styleUrls: ['./nesting-button-group.component.scss']
})
export class NestingButtonGroupComponent {

  public show : boolean = false;

  openMenu() {
    this.show =! this.show;
  }
}
