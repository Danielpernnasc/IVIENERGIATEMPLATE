import { Component } from '@angular/core';
import { columnChart2 } from '../../../../shared/data/charts/charts/google-chart';

@Component({
  selector: 'app-google-column-chart2',
  templateUrl: './google-column-chart2.component.html',
  styleUrls: ['./google-column-chart2.component.scss']
})
export class GoogleColumnChart2Component {

  public columnChart2 = columnChart2;

}
