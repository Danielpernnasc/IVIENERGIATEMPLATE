import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaRoutingModule } from './social-media-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

import { SocialMediaComponent } from './social-media.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { TimeLineRightComponent } from './time-line/time-line-right/time-line-right.component';
import { TimeLineLeftComponent } from './time-line/time-line-left/time-line-left.component';
import { TimeLineCenterComponent } from './time-line/time-line-center/time-line-center.component';
import { MyProfileComponent } from './time-line/time-line-left/my-profile/my-profile.component';
import { MutualFriendsComponent } from './time-line/time-line-left/mutual-friends/mutual-friends.component';
import { ActivityFeedComponent } from './time-line/time-line-left/activity-feed/activity-feed.component';
import { CommentOneComponent } from './time-line/time-line-center/comment-one/comment-one.component';
import { CommentTwoComponent } from './time-line/time-line-center/comment-two/comment-two.component';
import { ProfileIntroComponent } from './time-line/time-line-right/profile-intro/profile-intro.component';
import { FollowersComponent } from './time-line/time-line-right/followers/followers.component';
import { FollowingComponent } from './time-line/time-line-right/following/following.component';
import { LatestPhotosComponent } from './time-line/time-line-right/latest-photos/latest-photos.component';
import { FriendsProfileComponent } from './time-line/time-line-right/friends-profile/friends-profile.component';
import { AboutComponent } from './about/about.component';
import { AboutCenterComponent } from './about/about-center/about-center.component';
import { CommonAddFriendsComponent } from './about/about-center/common-add-friends/common-add-friends.component';
import { CommonHobbiesEductionComponent } from './about/about-center/common-hobbies-eduction/common-hobbies-eduction.component';
import { ActivityLogComponent } from './about/about-center/activity-log/activity-log.component';

@NgModule({
  declarations: [
    SocialMediaComponent,
    ProfileComponent,
    FriendsComponent,
    PhotosComponent,
    TimeLineComponent,
    TimeLineRightComponent,
    TimeLineLeftComponent,
    TimeLineCenterComponent,
    MyProfileComponent,
    MutualFriendsComponent,
    ActivityFeedComponent,
    CommentOneComponent,
    CommentTwoComponent,
    ProfileIntroComponent,
    FollowersComponent,
    FollowingComponent,
    LatestPhotosComponent,
    FriendsProfileComponent,
    AboutComponent,
    AboutCenterComponent,
    CommonAddFriendsComponent,
    CommonHobbiesEductionComponent,
    ActivityLogComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    NgbModule,
    SharedModule,
    GalleryModule,
    LightboxModule,
  ]
})
export class SocialMediaModule { }
