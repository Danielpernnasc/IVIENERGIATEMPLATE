import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/social-media/social-media-data'

@Component({
  selector: 'app-mutual-friends',
  templateUrl: './mutual-friends.component.html',
  styleUrls: ['./mutual-friends.component.scss']
})
export class MutualFriendsComponent {

  public isCollapsed = false;

  public mautalFriendsData = Data.mutualFriendsData

}
