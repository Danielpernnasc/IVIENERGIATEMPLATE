import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialMediaComponent } from './social-media.component';

const routes: Routes = [
  {
    path : '',
    component : SocialMediaComponent,
    data : {
      title : 'Social App',
      breadcrumb : 'Social App'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }
