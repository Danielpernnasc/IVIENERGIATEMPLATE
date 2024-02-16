import { Component } from '@angular/core';
import * as Chart from '../../../shared/data/charts/widget-charts'


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  public totalsalesChart = Chart.TotalSaleChart;
  public totalprojectChart = Chart.TotalProjectChart;
  public totalproductChart = Chart.TotalProductChart


}
