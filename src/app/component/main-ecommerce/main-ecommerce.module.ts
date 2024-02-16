import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEcommerceRoutingModule } from './main-ecommerce-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgxPrintModule } from 'ngx-print';
import { NgxSliderModule } from 'ngx-slider-v2';
import { BarRatingModule } from 'ngx-bar-rating';

import { ProductComponent } from './product/product.component';
import { FeaturesComponent } from './product/features/features.component';
import { ProductsComponent } from './product/products/products.component';
import { QuickViewComponent } from './product/quick-view/quick-view.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { BrandComponent } from './product-page/brand/brand.component';
import { DetailsComponent } from './product-page/details/details.component';
import { DescriptionComponent } from './product-page/description/description.component';
import { NgbActiveModal, NgbRating} from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { CreditCardComponent } from './payment-detail/credit-card/credit-card.component';
import { DebitCardComponent } from './payment-detail/debit-card/debit-card.component';
import { CodComponent } from './payment-detail/cod/cod.component';
import { EmiComponent } from './payment-detail/emi/emi.component';
import { NetBankingComponent } from './payment-detail/net-banking/net-banking.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CommonOrdersStatusComponent } from './order-history/common-orders-status/common-orders-status.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvioceDataTableComponent } from './invoice/invioce-data-table/invioce-data-table.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BillingComponent } from './checkout/billing/billing.component';
import { PlaceOrderComponent } from './checkout/place-order/place-order.component';
import { PricingComponent } from './pricing/pricing.component';
import { CommonBecomeMemberComponent } from './pricing/common-become-member/common-become-member.component';
import { CommonSimplePricingCardComponent } from './pricing/common-simple-pricing-card/common-simple-pricing-card.component';

@NgModule({
  declarations: [
    ProductComponent,
    FeaturesComponent,
    ProductsComponent,
    QuickViewComponent,
    ProductPageComponent,
    BrandComponent,
    DetailsComponent,
    DescriptionComponent,
    ProductListComponent,
    PaymentDetailComponent,
    CreditCardComponent,
    DebitCardComponent,
    CodComponent,
    EmiComponent,
    NetBankingComponent,
    OrderHistoryComponent,
    CommonOrdersStatusComponent,
    InvoiceComponent,
    InvioceDataTableComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    BillingComponent,
    PlaceOrderComponent,
    PricingComponent,
    CommonBecomeMemberComponent,
    CommonSimplePricingCardComponent,

  ],
  imports: [
    CommonModule,
    MainEcommerceRoutingModule,
    SharedModule,
    CarouselModule,
    GalleryModule,
    NgbRating,
    NgxPrintModule,
    NgxSliderModule,
    BarRatingModule
  ],
  providers : [
    NgbActiveModal
  ]
})
export class MainEcommerceModule { }
