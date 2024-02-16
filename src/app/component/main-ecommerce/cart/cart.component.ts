import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartItem = [
    {
      id : 1,
      img : "assets/images/product/1.png",
      name : "Long Top",
      price : "21",
      counter : 5,
      total : "12456",
    },
    {
      id : 2,
      img : "assets/images/product/13.png",
      name : "Fancy watch",
      price : "50",
      counter : 5,
      total : "12456",
    },{
      id : 3,
      img : "assets/images/product/4.png",
      name : "Man shoes",
      price : "11",
      counter : 5,
      total : "123456",
    }
  ]

  decrement(id : number){
    if(this.cartItem[id-1].counter > 1 ){
      this.cartItem[id-1].counter -= 1;
    }
  }

  increment(id : number){
    this.cartItem[id-1].counter += 1;
  }
}
