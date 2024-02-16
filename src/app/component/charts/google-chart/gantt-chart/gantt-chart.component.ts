import { Component } from '@angular/core';
import { ganttChart } from '../../../../shared/data/charts/charts/google-chart';

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.scss']
})
export class GanttChartComponent {

  public ganttChart = ganttChart;

}
