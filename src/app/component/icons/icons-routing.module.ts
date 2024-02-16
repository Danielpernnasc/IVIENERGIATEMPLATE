import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontawesomeIconComponent } from './fontawesome-icon/fontawesome-icon.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { ThemifyIconComponent } from './themify-icon/themify-icon.component';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'flag-icon',
        component : FlagIconComponent,
        data : {
          title : 'Flag Icons',
          breadcrumb : 'Flag Icons'
        }
      },
      {
        path : 'fontawesome-icon',
        component : FontawesomeIconComponent,
        data : {
          title : 'Font Awesome Icon',
          breadcrumb : 'Font Awesome Icon'
        }
      },
      {
        path : 'ico-icon',
        component : IcoIconComponent,
        data : {
          title : 'ICO Icon',
          breadcrumb : 'ICO Icon'
        }
      },
      {
        path : 'thimify-icon',
        component : ThemifyIconComponent,
        data : {
          title : 'Themify Icon',
          breadcrumb : 'Themify Icon'
        }
      },
      {
        path : 'feather-icon',
        component : FeatherIconComponent,
        data : {
          title : 'Feather Icons',
          breadcrumb : 'Feather Icons'
        }
      },
      {
        path : 'whether-icon',
        component : WeatherIconComponent,
        data : {
          title : 'Whether Icon',
          breadcrumb : 'Whether Icon'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
