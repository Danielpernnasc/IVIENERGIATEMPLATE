import { Component } from '@angular/core';
import { biPolarBarChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-bi-polar-bar-chart',
  templateUrl: './bi-polar-bar-chart.component.html',
  styleUrls: ['./bi-polar-bar-chart.component.scss']
})
export class BiPolarBarChartComponent {

  public biPolarBarChart = biPolarBarChart;

}
