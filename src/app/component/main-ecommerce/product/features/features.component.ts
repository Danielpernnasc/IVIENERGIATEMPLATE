import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  value: number = 800;
  maxvalue: number = 200;

  options: Options = {
    floor: 0,
    ceil: 1000,
    showTicksValues: true,
    tickStep : 250
  };

  public Images = [
        { id : 1, img : 'assets/images/ecommerce/01.jpg', name : 'Woman T-shirt' , price : '100.00'},
        { id : 2, img : 'assets/images/ecommerce/02.jpg', name : 'Dream Beauty Fashion' , price : '150.00'},
        { id : 3, img : 'assets/images/ecommerce/03.jpg', name : 'Wonen`s Dress' , price : '200.00'},
        { id : 1, img : 'assets/images/ecommerce/01.jpg', name : 'Fancy Shirt' , price : '100.00'},
        { id : 2, img : 'assets/images/ecommerce/02.jpg', name : 'Fancy Shirt' , price : '100.00'},
        { id : 3, img : 'assets/images/ecommerce/03.jpg', name : 'Fancy Shirt' , price : '100.00'},
      ]

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots:false,
    navContainerClass: 'owl-nav',
    navClass: [ 'owl-prev', 'owl-next' ],
    navText: [ '<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>' ],
  }
}
