import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/social-media/social-media-data';

@Component({
  selector: 'app-time-line-right',
  templateUrl: './time-line-right.component.html',
  styleUrls: ['./time-line-right.component.scss'],
})
export class TimeLineRightComponent {
  public friednsData = Data.Friends;
}
