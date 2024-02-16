import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/timeline';

@Component({
  selector: 'app-horizontial-timeline',
  templateUrl: './horizontial-timeline.component.html',
  styleUrls: ['./horizontial-timeline.component.scss']
})
export class HorizontialTimelineComponent {

  public horizontialTimelineData = Data.horizontialTimelineData;
  
}
