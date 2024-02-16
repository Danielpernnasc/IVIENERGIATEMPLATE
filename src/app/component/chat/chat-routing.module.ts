import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { VideoChatComponent } from './video-chat/video-chat.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'chat-app',
        component : ChatComponent,
        data : {
          title : 'Chat App',
          breadcrumb : 'Chat App'
        }
      },
      {
        path : 'video-chat',
        component : VideoChatComponent,
        data : {
          title : 'Video Chat',
          breadcrumb : 'Video Chat'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
