import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/social-media/social-media-data'

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.scss']
})
export class ActivityFeedComponent {

  public isCollapsed = false;

  public activityFeedData = Data.activityFeedData


}
