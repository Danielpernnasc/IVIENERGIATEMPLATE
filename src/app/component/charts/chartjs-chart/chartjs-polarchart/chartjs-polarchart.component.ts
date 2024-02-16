import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/charts/chartjs-chart'

@Component({
  selector: 'app-chartjs-polarchart',
  templateUrl: './chartjs-polarchart.component.html',
  styleUrls: ['./chartjs-polarchart.component.scss']
})
export class ChartjsPolarchartComponent {

  public polarChartLabels = chartData.polarChartLabels;
  public polarChartData = chartData.polarChartData;
  public polarChartType = chartData.polarChartType;
  public polarChartColors = chartData.polarChartColors;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLegend = chartData.polarChartLegend;

}
