import { Component } from '@angular/core';
import { radialBarChart } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-radial-bar-chart',
  templateUrl: './radial-bar-chart.component.html',
  styleUrls: ['./radial-bar-chart.component.scss']
})
export class RadialBarChartComponent {

  public radialBarChart = radialBarChart;

}
