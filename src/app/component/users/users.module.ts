import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileComponent } from './user-profile/profile/profile.component';
import { SinglePostComponent } from './user-profile/single-post/single-post.component';
import { DoublePostComponent } from './user-profile/double-post/double-post.component';
import { SidePostComponent } from './user-profile/side-post/side-post.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MyProfileComponent } from './user-edit/my-profile/my-profile.component';
import { EditProfileComponent } from './user-edit/edit-profile/edit-profile.component';
import { ProjectsComponent } from './user-edit/projects/projects.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileComponent,
    SinglePostComponent,
    DoublePostComponent,
    SidePostComponent,
    UserEditComponent,
    UserCardComponent,
    MyProfileComponent,
    EditProfileComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
