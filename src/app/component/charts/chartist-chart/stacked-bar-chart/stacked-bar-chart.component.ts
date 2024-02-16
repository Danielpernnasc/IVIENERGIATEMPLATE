import { Component } from '@angular/core';
import { stackedBarChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent {

  public stackedBarChart = stackedBarChart;

}
