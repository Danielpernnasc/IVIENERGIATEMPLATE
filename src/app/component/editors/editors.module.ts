import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsRoutingModule } from './editors-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { CkEditorComponent } from './ck-editor/ck-editor.component';
import { MdeEditorComponent } from './mde-editor/mde-editor.component';

@NgModule({
  declarations: [
    CkEditorComponent,
    MdeEditorComponent
  ],
  imports: [
    CommonModule,
    EditorsRoutingModule,
    SharedModule,
    FormsModule,
    CKEditorModule,
    AngularEditorModule
  ]
})
export class EditorsModule { }
