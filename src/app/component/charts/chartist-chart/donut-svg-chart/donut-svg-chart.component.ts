import { Component } from '@angular/core';
import { donutSVGChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-donut-svg-chart',
  templateUrl: './donut-svg-chart.component.html',
  styleUrls: ['./donut-svg-chart.component.scss']
})
export class DonutSvgChartComponent {

  public donutSVGChart = donutSVGChart;

}
