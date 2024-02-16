import { Component } from '@angular/core';
import { wordTreeChart } from '../../../../shared/data/charts/charts/google-chart';

@Component({
  selector: 'app-word-tree-chart',
  templateUrl: './word-tree-chart.component.html',
  styleUrls: ['./word-tree-chart.component.scss']
})
export class WordTreeChartComponent {

  public wordTreeChart = wordTreeChart;

}
