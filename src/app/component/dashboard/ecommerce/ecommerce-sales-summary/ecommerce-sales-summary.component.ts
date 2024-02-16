import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/dashboard-charts'

@Component({
  selector: 'app-ecommerce-sales-summary',
  templateUrl: './ecommerce-sales-summary.component.html',
  styleUrls: ['./ecommerce-sales-summary.component.scss']
})
export class EcommerceSalesSummaryComponent {

  public salesChart = Chart.EcommerceSalesSummary
}
