import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-light-theme-alert',
  templateUrl: './light-theme-alert.component.html',
  styleUrls: ['./light-theme-alert.component.scss']
})
export class LightThemeAlertComponent {

  public lightThemeAlertData = Data.lightThemeAlertData;

}
