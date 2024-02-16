import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HideNavScrollComponent } from './hide-nav-scroll/hide-nav-scroll.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { FooterFixedComponent } from './footer-fixed/footer-fixed.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'hide-nav-scroll',
        component : HideNavScrollComponent,
        data : {
          title : 'Hide Menu On Scroll',
          breadcrumb : 'Hide Menu On Scroll'
        }
      },
      {
        path : 'footer-light',
        component : FooterLightComponent,
        data : {
          title : 'Footer Light',
          breadcrumb : 'Footer Light'
        }
      },
      {
        path : 'footer-dark',
        component : FooterDarkComponent,
        data : {
          title : 'Footer Dark',
          breadcrumb : 'Footer Dark'
        }
      },
      {
        path : 'footer-fixed',
        component : FooterFixedComponent,
        data : {
          title : 'Footer Fixed',
          breadcrumb : 'Footer Fixed'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }
