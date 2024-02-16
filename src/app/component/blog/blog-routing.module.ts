import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogAddPostComponent } from './blog-add-post/blog-add-post.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'blog-details',
        component : BlogDetailsComponent,
        data : {
          title : 'Blog Details',
          breadcrumb : 'Blog Details'
        }
      },
      {
        path : 'blog-single',
        component : BlogSingleComponent,
        data : {
          title : 'Blog Single',
          breadcrumb : 'Blog Single'
        }
      },
      {
        path : 'add-post',
        component : BlogAddPostComponent,
        data : {
          title : 'Add Post',
          breadcrumb : 'Add Post'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
