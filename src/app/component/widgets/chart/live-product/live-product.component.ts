import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-charts'

@Component({
  selector: 'app-live-product',
  templateUrl: './live-product.component.html',
  styleUrls: ['./live-product.component.scss']
})
export class LiveProductComponent {

  public liveproductChart = Chart.LiveProductChart
}
