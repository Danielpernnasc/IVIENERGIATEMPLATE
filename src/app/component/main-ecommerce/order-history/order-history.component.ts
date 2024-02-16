import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/ecommerce/order-history'


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {

  public newordersData = Data.NewOrders;
  public shippedorderData = Data.ShippedOrders;
  public canclledorderData = Data.CancelledOrders;
  public datatableData = Data.DataTableOrders;
  
  constructor() {}

  ngOnInit(): void {}
}
