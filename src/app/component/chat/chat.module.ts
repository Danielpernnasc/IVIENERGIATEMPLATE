import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';

import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './chat/users/users.component';
import { UsersChatComponent } from './chat/users-chat/users-chat.component';
import { MenuComponent } from './menu/menu.component';
import { VideoChatComponent } from './video-chat/video-chat.component';


@NgModule({
  declarations: [
    ChatComponent,
    UsersComponent,
    UsersChatComponent,
    MenuComponent,
    VideoChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
