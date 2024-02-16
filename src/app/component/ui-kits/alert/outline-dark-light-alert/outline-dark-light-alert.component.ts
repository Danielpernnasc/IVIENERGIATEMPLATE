import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-outline-dark-light-alert',
  templateUrl: './outline-dark-light-alert.component.html',
  styleUrls: ['./outline-dark-light-alert.component.scss']
})
export class OutlineDarkLightAlertComponent {

  public outLinedAlert = Data.outLinedAlertData;

  closed(alertData : Data.outLinedAlert) {
    this.outLinedAlert.splice(this.outLinedAlert.indexOf(alertData), 1);
  }
}
