import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/users/user-card'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {

  public friendsData = Data.UserCardData;
}
