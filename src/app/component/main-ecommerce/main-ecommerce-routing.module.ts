import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'product',
        component : ProductComponent,
        data : {
          title : 'Product',
          breadcrumb : 'Product'
        }
      },
      {
        path : 'product-page',
        component : ProductPageComponent,
        data : {
          title : 'Product Page',
          breadcrumb : 'Product Page'
        }
      },
      {
        path : 'product-list',
        component : ProductListComponent,
        data : {
          title : 'Product List',
          breadcrumb : 'Product List'
        }
      },
      {
        path : 'payment-detail',
        component : PaymentDetailComponent,
        data : {
          title : 'Payment Detail',
          breadcrumb : 'Payment Detail'
        }
      },
      {
        path : 'order-history',
        component : OrderHistoryComponent,
        data : {
          title : 'Recent Orders',
          breadcrumb : 'Recent Orders'
        }
      },
      {
        path : 'invoice',
        component : InvoiceComponent,
        data : {
          title : 'Invoice',
          breadcrumb : 'Invoice'
        }
      },
      {
        path : 'cart',
        component : CartComponent,
        data : {
          title : 'Cart',
          breadcrumb : 'Cart'
        }
      },
      {
        path : 'wishlist',
        component : WishlistComponent,
        data : {
          title : 'Wishlist',
          breadcrumb : 'Wishlist'
        }
      },
      {
        path : 'checkout',
        component : CheckoutComponent,
        data : {
          title : 'Checkout',
          breadcrumb : 'Checkout'
        }
      },
      {
        path : 'pricing',
        component : PricingComponent,
        data : {
          title : 'Pricing',
          breadcrumb : 'Pricing'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainEcommerceRoutingModule { }
