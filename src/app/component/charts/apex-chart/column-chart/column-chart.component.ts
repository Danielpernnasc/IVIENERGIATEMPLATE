import { Component } from '@angular/core';
import { columnChart } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent {

  public columnChart = columnChart;

}
