import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-general-charts'

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent {

  public visitorsChart = Chart.VisitorsChart
  public isOpen : boolean = false;

  openMenu() {
    this.isOpen =! this.isOpen;
  }
}
