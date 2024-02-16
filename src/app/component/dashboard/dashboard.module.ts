import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {  NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';

import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProfileGrettingComponent } from './default/profile-gretting/profile-gretting.component';
import { CurrentBalanceComponent } from './default/current-balance/current-balance.component';
import { WeeklyVisitorsComponent } from './default/weekly-visitors/weekly-visitors.component';
import { BestSellingProductComponent } from './default/best-selling-product/best-selling-product.component';
import { SalesSummaryComponent } from './default/sales-summary/sales-summary.component';
import { TrackOrderComponent } from './default/track-order/track-order.component';
import { EarningComponent } from './ecommerce/earning/earning.component';
import { TransactionHistoryComponent } from './ecommerce/transaction-history/transaction-history.component';
import { AuditLogComponent } from './ecommerce/audit-log/audit-log.component';
import { UserInformationComponent } from './ecommerce/user-information/user-information.component';
import { TrafficComponent } from './ecommerce/traffic/traffic.component';
import { NewsUpdatesComponent } from './ecommerce/news-updates/news-updates.component';
import { OverAllRatingComponent } from './ecommerce/over-all-rating/over-all-rating.component';
import { ManageOrderComponent } from './ecommerce/manage-order/manage-order.component';
import { ScheduleLessionComponent } from './ecommerce/schedule-lession/schedule-lession.component';
import { EcommerceSalesSummaryComponent } from './ecommerce/ecommerce-sales-summary/ecommerce-sales-summary.component';
import { CommonDetailsComponent } from './default/common-details/common-details.component';
import { SortableDirective } from '../../shared/directive/sortable.directive';
import { CommonDataTableComponent } from './default/common-data-table/common-data-table.component';



@NgModule({
  declarations: [
    DefaultComponent,
    EcommerceComponent,
    ProfileGrettingComponent,
    CurrentBalanceComponent,
    WeeklyVisitorsComponent,
    BestSellingProductComponent,
    SalesSummaryComponent,
    TrackOrderComponent,
    EarningComponent,
    TransactionHistoryComponent,
    AuditLogComponent,
    UserInformationComponent,
    TrafficComponent,
    NewsUpdatesComponent,
    OverAllRatingComponent,
    ManageOrderComponent,
    ScheduleLessionComponent,
    EcommerceSalesSummaryComponent,
    CommonDetailsComponent,
    SortableDirective,
    CommonDataTableComponent
  ],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbDatepickerModule,
    SharedModule,
    NgApexchartsModule,
    FormsModule,
  ],

  exports : [
    CommonDataTableComponent
  ]
})
export class DashboardModule { }
