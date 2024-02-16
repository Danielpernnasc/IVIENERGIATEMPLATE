import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerRoutingModule } from './file-manager-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { FileManagerSidebarComponent } from './file-manager-sidebar/file-manager-sidebar.component';
import { FileManagerItemsComponent } from './file-manager-items/file-manager-items.component';
import { FileManagerComponent } from './file-manager.component';


@NgModule({
  declarations: [
    FileManagerSidebarComponent,
    FileManagerItemsComponent,
    FileManagerComponent,
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    SharedModule
  ]
})
export class FileManagerModule { }
