import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  public basicProgressBarData = Data.basicProgressBarData;
  public stripedData = Data.stripedData;
  public stripedAnimatedData = Data.stripedAnimatedData;
  public smallProgressBarData = Data.smallProgressBarData;
  public largeProgressBarData = Data.largeProgressBarData;
  
}
