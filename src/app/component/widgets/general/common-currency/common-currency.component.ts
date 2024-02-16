import { Component, Input } from '@angular/core';
import { ChartOptions } from '../../../../shared/data/charts/widget-general-charts';

@Component({
  selector: 'app-common-currency',
  templateUrl: './common-currency.component.html',
  styleUrls: ['./common-currency.component.scss']
})
export class CommonCurrencyComponent {

  @Input() data : ChartOptions | any;

}
