import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CkEditorComponent } from './ck-editor/ck-editor.component';
import { MdeEditorComponent } from './mde-editor/mde-editor.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'ck-editors',
        component : CkEditorComponent,
        data : {
          title : 'Ck Editor',
          breadcrumb : 'Ck Editor'
        }
      },
      {
        path : 'mde-editors',
        component : MdeEditorComponent,
        data : {
          title : 'MDE Editor',
          breadcrumb : 'MDE Editor'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorsRoutingModule { }
