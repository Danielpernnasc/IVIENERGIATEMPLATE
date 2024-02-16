import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCardComponent } from './user-card/user-card.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'users-profile',
        component : UserProfileComponent,
        data : {
          title : 'User Profile',
          breadcrumb : 'User Profile'
        }
      },
      {
        path : 'users-edit',
        component : UserEditComponent,
        data : {
          title : 'Edit Profile',
          breadcrumb : 'Edit Profile'
        }
      },
      {
        path : 'users-card',
        component : UserCardComponent,
        data : {
          title : 'User Cards',
          breadcrumb : 'User Cards'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
