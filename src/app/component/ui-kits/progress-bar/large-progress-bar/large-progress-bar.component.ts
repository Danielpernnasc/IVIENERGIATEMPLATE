import { Component } from '@angular/core';
import { largeProgressBarData } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-large-progress-bar',
  templateUrl: './large-progress-bar.component.html',
  styleUrls: ['./large-progress-bar.component.scss']
})
export class LargeProgressBarComponent {

  public largeProgressBarData = largeProgressBarData;

}
