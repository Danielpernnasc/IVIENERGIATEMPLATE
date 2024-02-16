import { Component } from '@angular/core';
import { basicProgressBarData } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-simple-progressbar',
  templateUrl: './simple-progressbar.component.html',
  styleUrls: ['./simple-progressbar.component.scss']
})
export class SimpleProgressbarComponent {

  public basicProgressBarData = basicProgressBarData;

}
