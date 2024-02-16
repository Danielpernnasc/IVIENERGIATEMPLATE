import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBookmarkRoutingModule } from './main-bookmark-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainBookmarkComponent } from './main-bookmark.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AllBookmarkComponent } from './all-bookmark/all-bookmark.component';
import { EditBookmarkComponent } from './modal/edit-bookmark/edit-bookmark.component';
import { AddTagComponent } from './modal/add-tag/add-tag.component';
import { NewBookmarkComponent } from './modal/new-bookmark/new-bookmark.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MainBookmarkComponent,
    SidemenuComponent,
    AllBookmarkComponent,
    EditBookmarkComponent,
    AddTagComponent,
    NewBookmarkComponent
  ],
  imports: [
    CommonModule,
    MainBookmarkRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [
    NgbActiveModal
  ]
})
export class MainBookmarkModule { }
