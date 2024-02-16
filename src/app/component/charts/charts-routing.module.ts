import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { ChartjsChartComponent } from './chartjs-chart/chartjs-chart.component';
import { ChartistChartComponent } from './chartist-chart/chartist-chart.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'apex-chart',
        component : ApexChartComponent,
        data : {
          title : 'Apex Chart',
          breadcrumb : 'Apex Chart'
        }
      },
      {
        path : 'google-chart',
        component : GoogleChartComponent,
        data : {
          title : 'Google Chart',
          breadcrumb : 'Google Chart'
        }
      },
      {
        path : 'chartjs',
        component : ChartjsChartComponent,
        data : {
          title : 'ChartJS Chart',
          breadcrumb : 'ChartJS Chart'
        }
      },
      {
        path : 'chartist',
        component : ChartistChartComponent,
        data : {
          title : 'Chartist Chart',
          breadcrumb : 'Chartist Chart'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
