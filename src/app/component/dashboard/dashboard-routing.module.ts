import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'default',
        component : DefaultComponent,
        // data : {
        //   title : 'Default Dashboard',
        //   breadcrumb : 'Default Dashboard'
        // }
      },
      {
        path : 'ecommerce',
        component : EcommerceComponent,
        data : {
          title : 'Ecommerce Dashboard',
          breadcrumb : 'E-Commerce'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
