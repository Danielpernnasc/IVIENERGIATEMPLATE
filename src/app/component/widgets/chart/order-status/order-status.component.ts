import { Component ,OnInit} from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-charts'

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit{

  constructor () {}
  

  ngOnInit(): void {    
  }

  public packedOrderChart = Chart.OrderPackedChart;
  public dispatchedChart = Chart.OrderDispatchedCHart;
  public reachStationChart = Chart.OrderReachChart;
  public outdeliveryChart = Chart.OrderOutForDeliveryChart;
  public deliveredChart = Chart.OrderDeliveredChart;
}
