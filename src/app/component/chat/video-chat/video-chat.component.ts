import { Component } from '@angular/core';

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.scss']
})
export class VideoChatComponent {

  public open:boolean = false;

  openFilter(){
    this.open =! this.open
  }
}
