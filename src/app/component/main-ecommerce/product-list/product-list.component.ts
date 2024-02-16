import { Component } from '@angular/core';
import * as Data from '../../../shared/tables/main-ecommerce/product-list'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  public PublicListData = Data.ProductList

}
