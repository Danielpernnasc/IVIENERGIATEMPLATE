import { Component } from '@angular/core';

@Component({
  selector: 'app-dismiss-light-alert',
  templateUrl: './dismiss-light-alert.component.html',
  styleUrls: ['./dismiss-light-alert.component.scss']
})
export class DismissLightAlertComponent {

  staticAlertClosed = false;
  
  closed() {
    this.staticAlertClosed = true;
  }
}
