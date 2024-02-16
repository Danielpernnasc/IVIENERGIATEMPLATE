import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/forms/form-widgets'


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

  public IconSwitchButton = Data.iconSwitchButton;
  public uncheckedSwitchButton = Data.uncheckedSwitch;
  public borderedIconButton = Data.borderWithIcon;
}
