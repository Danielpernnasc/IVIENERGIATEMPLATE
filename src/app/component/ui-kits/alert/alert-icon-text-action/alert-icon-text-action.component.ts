import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-alert-icon-text-action',
  templateUrl: './alert-icon-text-action.component.html',
  styleUrls: ['./alert-icon-text-action.component.scss']
})
export class AlertIconTextActionComponent {

  public alertIconTextAlertData = Data.alertIconTextAlertData;

  closed(alertData : Data.alertIconTextAlert){
    this.alertIconTextAlertData.splice(this.alertIconTextAlertData.indexOf(alertData),1)
  }

}
