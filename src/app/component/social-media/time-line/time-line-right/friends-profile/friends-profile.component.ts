import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/social-media/social-media-data'


@Component({
  selector: 'app-friends-profile',
  templateUrl: './friends-profile.component.html',
  styleUrls: ['./friends-profile.component.scss']
})
export class FriendsProfileComponent {

  public friednsData = Data.Friends;

}
