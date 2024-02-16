import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-default-buttons',
  templateUrl: './default-buttons.component.html',
  styleUrls: ['./default-buttons.component.scss']
})
export class DefaultButtonsComponent {

  public defaultButtonsData = Data.defaultButtonsData;
  public outlinedButtonsData = Data.outlinedButtonsData;
  public gradienButtonData = Data.gradienButtonData;

}
