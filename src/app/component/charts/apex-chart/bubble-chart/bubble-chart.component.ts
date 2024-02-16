import { Component } from '@angular/core';
import { bubbleChart } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent {

  public bubbleChart = bubbleChart;
}
