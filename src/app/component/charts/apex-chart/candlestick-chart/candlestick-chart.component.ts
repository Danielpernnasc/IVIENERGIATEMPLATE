import { Component } from '@angular/core';
import { candlestickChart } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.scss']
})
export class CandlestickChartComponent {

  public candlestickChart = candlestickChart;

}
