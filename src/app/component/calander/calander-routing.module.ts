import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalanderComponent } from './calander.component';

const routes: Routes = [
  {
    path : '',
    component : CalanderComponent,
    data : {
      title : 'Calander',
      breadcrumb : 'Calander'
  },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalanderRoutingModule { }
