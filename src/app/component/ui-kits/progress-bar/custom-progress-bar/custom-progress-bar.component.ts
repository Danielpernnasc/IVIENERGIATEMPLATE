import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-custom-progress-bar',
  templateUrl: './custom-progress-bar.component.html',
  styleUrls: ['./custom-progress-bar.component.scss']
})
export class CustomProgressBarComponent {

  public customeProgressData = Data.customeProgressData;
  
}
