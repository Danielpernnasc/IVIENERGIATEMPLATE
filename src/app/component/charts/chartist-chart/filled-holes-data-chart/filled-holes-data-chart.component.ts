import { Component } from '@angular/core';
import { filledHolesDataChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-filled-holes-data-chart',
  templateUrl: './filled-holes-data-chart.component.html',
  styleUrls: ['./filled-holes-data-chart.component.scss']
})
export class FilledHolesDataChartComponent {

  public filledHolesDataChart = filledHolesDataChart;

}
