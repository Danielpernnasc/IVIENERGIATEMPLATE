import { Component } from '@angular/core';

@Component({
  selector: 'app-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss']
})
export class ButtonDropdownComponent {

  public open : boolean = false;
  public open2 : boolean = false;
  public open3 : boolean = false;
  public open4 : boolean = false;

  openMenu() {
    this.open =! this.open;
  }
  
  openMenu2() {
    this.open2 =! this.open2
  }

  openMenu3() {
    this.open3 =! this.open3
  }

  openMenu4() {
    this.open4 =! this.open4
  }

}
