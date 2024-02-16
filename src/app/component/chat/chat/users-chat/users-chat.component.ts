import { Component, EventEmitter, Output } from '@angular/core';
import { chatData } from '../../../../shared/data/data/chat/chat';

@Component({
  selector: 'app-users-chat',
  templateUrl: './users-chat.component.html',
  styleUrls: ['./users-chat.component.scss']
})
export class UsersChatComponent {

  public chatData = chatData;
  public open:boolean = false;

  @Output() filterValue = new EventEmitter<boolean>();

  openFilter(){
    this.open =! this.open
    this.filterValue.emit(this.open)
  }

}
