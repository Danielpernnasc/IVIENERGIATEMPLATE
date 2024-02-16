import { Component } from '@angular/core';
import { lineAreaChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-line-area-chart',
  templateUrl: './line-area-chart.component.html',
  styleUrls: ['./line-area-chart.component.scss']
})
export class LineAreaChartComponent {

  public lineAreaChart = lineAreaChart;

}
