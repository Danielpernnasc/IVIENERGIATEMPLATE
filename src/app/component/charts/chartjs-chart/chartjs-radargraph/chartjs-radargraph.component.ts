import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/charts/chartjs-chart';

@Component({
  selector: 'app-chartjs-radargraph',
  templateUrl: './chartjs-radargraph.component.html',
  styleUrls: ['./chartjs-radargraph.component.scss']
})
export class ChartjsRadargraphComponent {

  public radarGraphOptions = chartData.radarGraphOptions;
  public radarGraphLabels = chartData.radarGraphLabels;
  public radarGraphType = chartData.radarGraphType;
  public radarGraphLegend = chartData.radarGraphLegend;
  public radarGraphData = chartData.radarGraphData;
}
