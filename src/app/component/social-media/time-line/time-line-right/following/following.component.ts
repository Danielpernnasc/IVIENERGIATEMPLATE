import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/social-media/social-media-data'

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent {

  public followingData = Data.Following;
  
}
