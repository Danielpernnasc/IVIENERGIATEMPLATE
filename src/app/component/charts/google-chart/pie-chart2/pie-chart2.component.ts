import { Component } from '@angular/core';
import { pieChart2 } from '../../../../shared/data/charts/charts/google-chart';

@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.scss']
})
export class PieChart2Component {

  public pieChart2 = pieChart2;

}
