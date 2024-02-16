import { Component } from '@angular/core';
import { svgPathChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-svg-path-chart',
  templateUrl: './svg-path-chart.component.html',
  styleUrls: ['./svg-path-chart.component.scss']
})
export class SvgPathChartComponent {

  public svgPathChart = svgPathChart;

}
