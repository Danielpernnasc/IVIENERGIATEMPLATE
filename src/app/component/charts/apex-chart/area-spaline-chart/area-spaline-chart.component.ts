import { Component } from '@angular/core';
import { areaSpalineChart } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-area-spaline-chart',
  templateUrl: './area-spaline-chart.component.html',
  styleUrls: ['./area-spaline-chart.component.scss']
})
export class AreaSpalineChartComponent {

  public areaSpalineChart = areaSpalineChart;
}
