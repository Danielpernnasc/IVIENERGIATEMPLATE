import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/users/user-card'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  public usercardData = Data.UserCardData;
  
}
