import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogAddPostComponent } from './blog-add-post/blog-add-post.component';
import { BlogCommentComponent } from './blog-single/blog-comment/blog-comment.component';


@NgModule({
  declarations: [
    BlogDetailsComponent,
    BlogSingleComponent,
    BlogAddPostComponent,
    BlogCommentComponent
  ],

  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    FormsModule,
    NgxDropzoneModule,
    NgSelectModule,
    CKEditorModule
  ],

  exports : [
    BlogCommentComponent
  ]
})
export class BlogModule { }
