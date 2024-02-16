import { Component ,OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Image } from '@ks89/angular-modal-gallery';



@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{

  imagesRect : Image[] = [
    new Image(0, { img: 'assets/images/ecommerce/04.jpg' }, { img: 'assets/images/ecommerce/03.jpg' }),
    new Image(1, { img: 'assets/images/ecommerce/02.jpg' }, { img: 'assets/images/ecommerce/02.jpg' }),
    new Image(2, { img: 'assets/images/ecommerce/03.jpg' }, { img: 'assets/images/ecommerce/03.jpg' }),
    new Image(3, { img: 'assets/images/ecommerce/04.jpg' }, { img: 'assets/images/ecommerce/04.jpg' })
  ]

  customOptions: OwlOptions = {
    loop: true,
    center: true,
    dots: false,
    navSpeed: 500,
    navText: [''],
    autoplay : true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  constructor() {}

  ngOnInit(): void {
    
  }
}
