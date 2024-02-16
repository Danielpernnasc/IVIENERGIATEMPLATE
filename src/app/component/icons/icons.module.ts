import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsRoutingModule } from './icons-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from '../../shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontawesomeIconComponent } from './fontawesome-icon/fontawesome-icon.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { ThemifyIconComponent } from './themify-icon/themify-icon.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';


@NgModule({
  declarations: [
    FlagIconComponent,
    FontawesomeIconComponent,
    IcoIconComponent,
    FeatherIconComponent,
    ThemifyIconComponent,
    WeatherIconComponent
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,
    SharedModule,
    AngularSvgIconModule.forRoot(),
    ToastrModule.forRoot(),
  ]
})
export class IconsModule { }
