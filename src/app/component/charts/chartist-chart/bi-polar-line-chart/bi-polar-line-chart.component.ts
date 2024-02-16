import { Component } from '@angular/core';
import { biPolarLineChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-bi-polar-line-chart',
  templateUrl: './bi-polar-line-chart.component.html',
  styleUrls: ['./bi-polar-line-chart.component.scss']
})
export class BiPolarLineChartComponent {

  public biPolarLineChart = biPolarLineChart;

}
