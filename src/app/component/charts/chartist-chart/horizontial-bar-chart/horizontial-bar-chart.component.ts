import { Component } from '@angular/core';
import { horizontialBarChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-horizontial-bar-chart',
  templateUrl: './horizontial-bar-chart.component.html',
  styleUrls: ['./horizontial-bar-chart.component.scss']
})
export class HorizontialBarChartComponent {

  public horizontialBarChart = horizontialBarChart;

}
