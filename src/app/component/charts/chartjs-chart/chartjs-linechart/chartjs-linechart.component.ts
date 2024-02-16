import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/charts/chartjs-chart';

@Component({
  selector: 'app-chartjs-linechart',
  templateUrl: './chartjs-linechart.component.html',
  styleUrls: ['./chartjs-linechart.component.scss']
})
export class ChartjsLinechartComponent {

  public barChartOptions = chartData.barChartOptions;
  public barChartLabels = chartData.barChartLabels;
  public barChartType = chartData.barChartType;
  public barChartLegend = chartData.barChartLegend;
  public barChartData = chartData.barChartData;

}
