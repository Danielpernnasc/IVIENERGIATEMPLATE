import { Component } from '@angular/core';
import { customHeightProgressBarData } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-custom-height-progressbar',
  templateUrl: './custom-height-progressbar.component.html',
  styleUrls: ['./custom-height-progressbar.component.scss']
})
export class CustomHeightProgressbarComponent {

  public customHeightProgressBarData = customHeightProgressBarData;

}
