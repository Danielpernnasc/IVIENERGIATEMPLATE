import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-charts'


@Component({
  selector: 'app-monthly-history',
  templateUrl: './monthly-history.component.html',
  styleUrls: ['./monthly-history.component.scss']
})
export class MonthlyHistoryComponent {

  public monthlyhistoryChart = Chart.MonthlyHistoryChart
}
