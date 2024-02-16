import { Component } from '@angular/core';
import { radarChart } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {

  public radarChart = radarChart;

}
