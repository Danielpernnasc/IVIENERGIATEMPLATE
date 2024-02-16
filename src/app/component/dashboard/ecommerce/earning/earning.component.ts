import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/dashboard-charts'
@Component({
  selector: 'app-earning',
  templateUrl: './earning.component.html',
  styleUrls: ['./earning.component.scss']
})
export class EarningComponent {

  public earningChart = Chart.EarningChart
}
