import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/chat/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  public userData = Data.Users
  
}
