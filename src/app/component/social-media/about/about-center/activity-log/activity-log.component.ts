import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/social-media/social-media-data'

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent {

  public activityLogData = Data.activityLog;

}
