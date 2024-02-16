import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-charts'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  public userChart = Chart.UserChart
}
