import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-charts'

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html',
  styleUrls: ['./monthly-sales.component.scss']
})
export class MonthlySalesComponent {

  public monthlysalesChart = Chart.MonthlySaleChart;
}
