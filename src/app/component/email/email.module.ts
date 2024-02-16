import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailRoutingModule } from './email-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { EmailAppComponent } from './email-app/email-app.component';
import { EmailFilterComponent } from './email-app/email-filter/email-filter.component';
import { EmailUserComponent } from './email-app/email-user/email-user.component';
import { ReadEmailComponent } from './email-app/read-email/read-email.component';
import { EmailComposeComponent } from './email-compose/email-compose.component';


@NgModule({
  declarations: [
    EmailAppComponent,
    EmailFilterComponent,
    EmailUserComponent,
    ReadEmailComponent,
    EmailComposeComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    SharedModule,
    CKEditorModule
  ]
})
export class EmailModule { }
