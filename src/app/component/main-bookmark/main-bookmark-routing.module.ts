import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBookmarkComponent } from './main-bookmark.component';

const routes: Routes = [
  {
    path : '',
    component : MainBookmarkComponent,
    data : {
      title : 'Bookmarks',
      breadcrumb : 'Bookmarks'
  },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainBookmarkRoutingModule { }
