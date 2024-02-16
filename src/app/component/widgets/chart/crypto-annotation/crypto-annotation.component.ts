import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-charts'

@Component({
  selector: 'app-crypto-annotation',
  templateUrl: './crypto-annotation.component.html',
  styleUrls: ['./crypto-annotation.component.scss']
})
export class CryptoAnnotationComponent {

  public cryptoannotationChart = Chart.AnnotationChart
}
