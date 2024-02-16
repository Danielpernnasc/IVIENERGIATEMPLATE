import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningListComponent } from './learning-list/learning-list.component';
import { DetailedCourceComponent } from './detailed-cource/detailed-cource.component';

const routes: Routes = [
  {
    path : 'learning-list',
    component : LearningListComponent,
    data : {
      title : 'Learning List',
      breadcrumb : 'Learning List'
    }
  },
  {
    path : 'detailed-course',
    component : DetailedCourceComponent,
    data : {
      title : 'Detailed Course',
      breadcrumb : 'Detailed Course'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
