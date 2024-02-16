import { Component } from '@angular/core';
import * as manageorder from '../../../../shared/data/data/ecommerce/manage-order'

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.scss']
})
export class ManageOrderComponent {

  public ManageOrder = manageorder.ManageOrder;
  public isOpen : boolean = false;

  openMenu(){
    this.isOpen =! this.isOpen;
  }
}
