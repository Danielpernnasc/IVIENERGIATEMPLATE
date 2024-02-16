import { Component } from '@angular/core';
import { barChart } from '../../../../shared/data/charts/charts/chartjs-chart';

@Component({
  selector: 'app-chartjs-barchart',
  templateUrl: './chartjs-barchart.component.html',
  styleUrls: ['./chartjs-barchart.component.scss']
})
export class ChartjsBarchartComponent {

  public barChart = barChart;

}
