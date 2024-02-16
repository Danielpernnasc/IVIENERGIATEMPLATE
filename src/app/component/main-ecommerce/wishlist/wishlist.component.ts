import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/ecommerce/wishlist'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  public wishlistData = Data.WishlistData

}
