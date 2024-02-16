import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-checkbox-button-group',
  templateUrl: './checkbox-button-group.component.html',
  styleUrls: ['./checkbox-button-group.component.scss']
})
export class CheckboxButtonGroupComponent {

  public checkBoxData = Data.checkBoxData;

}
