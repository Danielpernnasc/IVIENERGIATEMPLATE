import { Component } from '@angular/core';
import { holesDataChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-holes-data-chart',
  templateUrl: './holes-data-chart.component.html',
  styleUrls: ['./holes-data-chart.component.scss']
})
export class HolesDataChartComponent {

  public holesDataChart = holesDataChart;

}
