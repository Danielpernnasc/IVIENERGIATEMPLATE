import { Component } from '@angular/core';
import { advanceSMILChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-advance-smil-chart',
  templateUrl: './advance-smil-chart.component.html',
  styleUrls: ['./advance-smil-chart.component.scss']
})
export class AdvanceSmilChartComponent {

  public advanceSMILChart = advanceSMILChart;

}
