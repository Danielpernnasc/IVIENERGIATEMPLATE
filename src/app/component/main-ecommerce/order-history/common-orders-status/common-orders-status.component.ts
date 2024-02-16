import { Component, Input ,OnInit} from '@angular/core';
import { Orders } from '../../../../../app/shared/data/data/ecommerce/order-history';

@Component({
  selector: 'app-common-orders-status',
  templateUrl: './common-orders-status.component.html',
  styleUrls: ['./common-orders-status.component.scss']
})
export class CommonOrdersStatusComponent implements OnInit{

  @Input() data : Orders;

  constructor() {}

  ngOnInit(): void {
  }

}
