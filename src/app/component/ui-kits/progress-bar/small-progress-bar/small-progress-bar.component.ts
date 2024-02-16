import { Component } from '@angular/core';
import { smallProgressBarData } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-small-progress-bar',
  templateUrl: './small-progress-bar.component.html',
  styleUrls: ['./small-progress-bar.component.scss']
})
export class SmallProgressBarComponent {

  public smallProgressBarData = smallProgressBarData;

}
