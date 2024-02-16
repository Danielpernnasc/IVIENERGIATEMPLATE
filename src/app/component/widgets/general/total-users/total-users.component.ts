import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-general-charts'
import { totalUserData } from '../../../../shared/data/data/widgets/widgets-data';
@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.scss']
})
export class TotalUsersComponent {

  public GrowthChart = Chart.GrowthChart;
  public totalUserData = totalUserData;
  public isOpen : boolean = false;

  openMenu() {
    this.isOpen =! this.isOpen;
  }

}
