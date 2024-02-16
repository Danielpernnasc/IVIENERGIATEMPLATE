import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/charts/chartjs-chart'


@Component({
  selector: 'app-chartjs-linegraph',
  templateUrl: './chartjs-linegraph.component.html',
  styleUrls: ['./chartjs-linegraph.component.scss']
})
export class ChartjsLinegraphComponent {

  public lineGraphOptions = chartData.lineGraphOptions;
  public lineGraphLabels = chartData.lineGraphLabels;
  public lineGraphType = chartData.lineGraphType;
  public lineGraphLegend = chartData.lineGraphLegend;
  public lineGraphData = chartData.lineGraphData;
    
}
