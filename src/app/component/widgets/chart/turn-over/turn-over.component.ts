import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-charts'

@Component({
  selector: 'app-turn-over',
  templateUrl: './turn-over.component.html',
  styleUrls: ['./turn-over.component.scss']
})
export class TurnOverComponent {

  public turnoverChart = Chart.TurnOverChart
}
