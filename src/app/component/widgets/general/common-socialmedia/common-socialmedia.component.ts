import { Component, Input } from '@angular/core';
import { ChartOptions } from '../../../../shared/data/charts/widget-general-charts';

@Component({
  selector: 'app-common-socialmedia',
  templateUrl: './common-socialmedia.component.html',
  styleUrls: ['./common-socialmedia.component.scss']
})
export class CommonSocialmediaComponent {

  @Input() data : ChartOptions | any;

}
