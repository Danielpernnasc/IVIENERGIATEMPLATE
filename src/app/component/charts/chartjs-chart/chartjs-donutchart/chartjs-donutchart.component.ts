import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/charts/chartjs-chart';

@Component({
  selector: 'app-chartjs-donutchart',
  templateUrl: './chartjs-donutchart.component.html',
  styleUrls: ['./chartjs-donutchart.component.scss']
})
export class ChartjsDonutchartComponent {

  public doughnutChartLabels = chartData.doughnutChartLabels;
  public doughnutChartData = chartData.doughnutChartData;
  public doughnutChartType = chartData.doughnutChartType;
  public doughnutChartColors = chartData.doughnutChartColors;
  public doughnutChartOptions = chartData.doughnutChartOptions;
  public doughnutChartLegend = chartData.doughnutChartLegend;

}
