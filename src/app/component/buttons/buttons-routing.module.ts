import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultButtonsComponent } from './default-buttons/default-buttons.component';
import { FlatButtonsComponent } from './flat-buttons/flat-buttons.component';
import { EdgeButtonsComponent } from './edge-buttons/edge-buttons.component';
import { RaisedButtonsComponent } from './raised-buttons/raised-buttons.component';
import { ButtonGroupComponent } from './button-group/button-group.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'default-style',
        component : DefaultButtonsComponent,
        data : {
          title : 'Default Style',
          breadcrumb : 'Default Style',
        }
      },
      {
        path : 'flat-style',
        component : FlatButtonsComponent,
        data : {
          title : 'Flat Buttons',
          breadcrumb : 'Flat Buttons',
        }
      },
      {
        path : 'edge-style',
        component : EdgeButtonsComponent,
        data : {
          title : 'Edge Buttons',
          breadcrumb : 'Edge Buttons',
        }
      },
      {
        path : 'raised-style',
        component : RaisedButtonsComponent,
        data : {
          title : 'Raised Buttons',
          breadcrumb : 'Raised Buttons',
        }
      },
      {
        path : 'button-group',
        component : ButtonGroupComponent,
        data : {
          title : 'Button Group',
          breadcrumb : 'Button Group',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule { }
