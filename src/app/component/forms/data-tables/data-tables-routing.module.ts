import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesComponent } from './data-tables.component';

const routes: Routes = [
  {
    path : '',
    component : DataTablesComponent,
    data : {
      title : 'Data Tables',
      breadcrumb : 'Data Tables'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTablesRoutingModule { }
