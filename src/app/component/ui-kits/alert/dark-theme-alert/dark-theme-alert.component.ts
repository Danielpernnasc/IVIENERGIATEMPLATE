import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-dark-theme-alert',
  templateUrl: './dark-theme-alert.component.html',
  styleUrls: ['./dark-theme-alert.component.scss']
})
export class DarkThemeAlertComponent {

  public darkThemeAlertData = Data.darkThemeAlertData;
  
}
