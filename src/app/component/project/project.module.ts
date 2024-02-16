import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ProjectListComponent } from './project-list/project-list.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { UploadFileComponent } from './create-new-project/upload-file/upload-file.component';


@NgModule({
  declarations: [
    ProjectListComponent,
    CreateNewProjectComponent,
    UploadFileComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NgxDropzoneModule,
    SharedModule

  ]
})
export class ProjectModule { }
