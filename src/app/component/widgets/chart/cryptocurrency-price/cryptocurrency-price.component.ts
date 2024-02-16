import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-charts'

@Component({
  selector: 'app-cryptocurrency-price',
  templateUrl: './cryptocurrency-price.component.html',
  styleUrls: ['./cryptocurrency-price.component.scss']
})
export class CryptocurrencyPriceComponent {

  public cryptopriceChart = Chart.CryptoPriceChart;
}
