import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailAppComponent } from './email-app/email-app.component';
import { EmailComposeComponent } from './email-compose/email-compose.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'email-app',
        component : EmailAppComponent,
        data : {
          title : 'Email Application',
          breadcrumb : 'Email Application'
        }
      },
      {
        path : 'email-compose',
        component : EmailComposeComponent,
        data : {
          title : 'Email Compose',
          breadcrumb : 'Email Compose'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
