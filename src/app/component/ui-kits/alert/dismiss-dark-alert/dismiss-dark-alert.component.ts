import { Component } from '@angular/core';

@Component({
  selector: 'app-dismiss-dark-alert',
  templateUrl: './dismiss-dark-alert.component.html',
  styleUrls: ['./dismiss-dark-alert.component.scss']
})
export class DismissDarkAlertComponent {

  staticAlertClosed = false;
  
  closed() {
    this.staticAlertClosed = true;
  }
}
