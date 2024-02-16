import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-widgets'

@Component({
  selector: 'app-disable-outline',
  templateUrl: './disable-outline.component.html',
  styleUrls: ['./disable-outline.component.scss']
})
export class DisableOutlineComponent {

  public iconSwitchButton = Data.iconSwitchButton[0].data
}
