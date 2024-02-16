import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-widgets'

@Component({
  selector: 'app-custom-switch',
  templateUrl: './custom-switch.component.html',
  styleUrls: ['./custom-switch.component.scss']
})
export class CustomSwitchComponent {

  public defaultSwitchData = Data.defaultSwitch;

}
