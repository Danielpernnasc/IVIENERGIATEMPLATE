import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PageLayoutRoutingModule } from './page-layout-routing.module';

import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { FooterFixedComponent } from './footer-fixed/footer-fixed.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { HideNavScrollComponent } from './hide-nav-scroll/hide-nav-scroll.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    HideNavScrollComponent,
    FooterLightComponent,
    FooterDarkComponent,
    FooterFixedComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    SharedModule,
  ]
})
export class PageLayoutModule { }
