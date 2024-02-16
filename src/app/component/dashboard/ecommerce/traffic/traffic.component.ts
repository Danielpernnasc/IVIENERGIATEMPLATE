import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/dashboard-charts'

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss']
})
export class TrafficComponent {

  public TrafficChart = Chart.TrafficChart;
}
