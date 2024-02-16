import { Component, Input } from '@angular/core';
import { productStatus } from '../../../../shared/data/charts/widget-general-charts';

@Component({
  selector: 'app-common-product-status-chartbox',
  templateUrl: './common-product-status-chartbox.component.html',
  styleUrls: ['./common-product-status-chartbox.component.scss']
})
export class CommonProductStatusChartboxComponent {

  @Input() data : productStatus;

}
