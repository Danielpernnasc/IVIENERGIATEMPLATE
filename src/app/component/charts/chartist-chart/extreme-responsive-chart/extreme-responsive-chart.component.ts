import { Component } from '@angular/core';
import { extremeResponsiveChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-extreme-responsive-chart',
  templateUrl: './extreme-responsive-chart.component.html',
  styleUrls: ['./extreme-responsive-chart.component.scss']
})
export class ExtremeResponsiveChartComponent {

  public extremeResponsiveChart = extremeResponsiveChart;

}
