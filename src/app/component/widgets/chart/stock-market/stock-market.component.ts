import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-charts'

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrls: ['./stock-market.component.scss']
})
export class StockMarketComponent {
  public stockChart = Chart.StockMarketChart

}
