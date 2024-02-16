import { Component } from '@angular/core';

@Component({
  selector: 'app-left-border-alert',
  templateUrl: './left-border-alert.component.html',
  styleUrls: ['./left-border-alert.component.scss']
})
export class LeftBorderAlertComponent {

  staticAlertClosed = false;
  
  closed() {
    this.staticAlertClosed = true;
  }
}
