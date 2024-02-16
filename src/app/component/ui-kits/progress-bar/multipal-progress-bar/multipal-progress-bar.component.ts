import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-multipal-progress-bar',
  templateUrl: './multipal-progress-bar.component.html',
  styleUrls: ['./multipal-progress-bar.component.scss']
})
export class MultipalProgressBarComponent {

  public multipalBarData = Data.multipalBarData;
  
}
