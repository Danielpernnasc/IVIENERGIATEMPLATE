import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { TasksComponent } from './tasks.component';
import { TaskSidemenuComponent } from './task-sidemenu/task-sidemenu.component';
import { NewTaskComponent } from './modal/new-task/new-task.component';
import { AddTagComponent } from './modal/add-tag/add-tag.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TasksComponent,
    TaskSidemenuComponent,
    NewTaskComponent,
    AddTagComponent,
    AllTasksComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ],
  providers : [
    NgbActiveModal
  ]
})
export class TasksModule { }
