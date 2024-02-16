import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/users/post-data'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  public singlepost1 = Data.SinglePostData1;
  public singlepost2 = Data.SinglePostData2;

}
