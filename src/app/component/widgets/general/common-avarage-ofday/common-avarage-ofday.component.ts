import { Component, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-common-avarage-ofday',
  templateUrl: './common-avarage-ofday.component.html',
  styleUrls: ['./common-avarage-ofday.component.scss']
})
export class CommonAvarageOfdayComponent {

  @Input() data: ChartOptions | any;
  
}
