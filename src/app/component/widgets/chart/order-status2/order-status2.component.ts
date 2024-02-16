import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-charts'

@Component({
  selector: 'app-order-status2',
  templateUrl: './order-status2.component.html',
  styleUrls: ['./order-status2.component.scss']
})
export class OrderStatus2Component {

  public orderstatus2Chart = Chart.OrderStatus2Chart
}
