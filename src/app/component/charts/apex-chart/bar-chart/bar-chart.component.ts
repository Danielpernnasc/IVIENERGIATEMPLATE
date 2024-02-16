import { Component } from '@angular/core';
import { basicBarChart } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  public basicBarChart = basicBarChart;

}
