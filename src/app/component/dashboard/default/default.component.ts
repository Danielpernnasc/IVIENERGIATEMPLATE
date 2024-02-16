import { Component } from '@angular/core';
import { totalOrderData, totalProductsData, totalUserData } from '../../../shared/data/data/default-dashboard/default-dashboard';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {

  public totalOrderData = totalOrderData;
  public totalProductsData = totalProductsData;
  public totalUserData = totalUserData;

}
