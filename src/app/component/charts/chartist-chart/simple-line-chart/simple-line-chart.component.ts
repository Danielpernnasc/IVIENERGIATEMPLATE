import { Component } from '@angular/core';
import { simpleLineChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-simple-line-chart',
  templateUrl: './simple-line-chart.component.html',
  styleUrls: ['./simple-line-chart.component.scss']
})
export class SimpleLineChartComponent {

  public simpleLineChart = simpleLineChart;

}
