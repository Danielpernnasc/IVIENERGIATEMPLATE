import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from '../../dashboard/dashboard.module';
import { DataTablesRoutingModule } from './data-tables-routing.module';

import { DataTablesComponent } from './data-tables.component';



@NgModule({
  declarations: [
    DataTablesComponent,
  ],

  imports: [
    CommonModule,
    DataTablesRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardModule,
    
  ]
})
export class DataTablesModule { }
