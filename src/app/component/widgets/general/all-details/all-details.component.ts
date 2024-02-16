import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-general-charts';
import { allDetails } from '../../../../shared/data/data/widgets/widgets-data';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.scss']
})
export class AllDetailsComponent {

  public orderChart = Chart.OrderChart;
  public profitChart = Chart.ProfitChart;
  public allDetails = allDetails;

}
