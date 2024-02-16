import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoRoutingModule } from './to-do-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToDoComponent } from './to-do.component';
import { ToDoFilterComponent } from './to-do-filter/to-do-filter.component';


@NgModule({
  declarations: [
    ToDoComponent,
    ToDoFilterComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ToDoModule { }
