import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { GeneralComponent } from './general/general.component';
import { ChartComponent } from './chart/chart.component';
import { CoursesComponent } from './general/courses/courses.component';
import { TotalUsersComponent } from './general/total-users/total-users.component';
import { VisitorsComponent } from './general/visitors/visitors.component';
import { AllDetailsComponent } from './general/all-details/all-details.component';
import { BalanceComponent } from './general/balance/balance.component';
import { WidgetCalanderComponent } from './general/widget-calander/widget-calander.component';
import { MonthlyHistoryComponent } from './chart/monthly-history/monthly-history.component';
import { SkillStatusComponent } from './chart/skill-status/skill-status.component';
import { OrderStatusComponent } from './chart/order-status/order-status.component';
import { TurnOverComponent } from './chart/turn-over/turn-over.component';
import { CryptocurrencyPriceComponent } from './chart/cryptocurrency-price/cryptocurrency-price.component';
import { CryptoAnnotationComponent } from './chart/crypto-annotation/crypto-annotation.component';
import { StockMarketComponent } from './chart/stock-market/stock-market.component';
import { FinanceComponent } from './chart/finance/finance.component';
import { OrderStatus2Component } from './chart/order-status2/order-status2.component';
import { MonthlySalesComponent } from './chart/monthly-sales/monthly-sales.component';
import { UsersComponent } from './chart/users/users.component';
import { LiveProductComponent } from './chart/live-product/live-product.component';
import { CommonTopChartComponent } from './chart/common-top-chart/common-top-chart.component';
import { CommonCurrencyComponent } from './general/common-currency/common-currency.component';
import { CommonAvarageOfdayComponent } from './general/common-avarage-ofday/common-avarage-ofday.component';
import { CommonProductStatusChartboxComponent } from './general/common-product-status-chartbox/common-product-status-chartbox.component';
import { CommonSocialmediaComponent } from './general/common-socialmedia/common-socialmedia.component';


@NgModule({
  declarations: [
    GeneralComponent,
    ChartComponent,
    CoursesComponent,
    TotalUsersComponent,
    VisitorsComponent,
    AllDetailsComponent,
    BalanceComponent,
    WidgetCalanderComponent,
    MonthlyHistoryComponent,
    SkillStatusComponent,
    OrderStatusComponent,
    LiveProductComponent,
    TurnOverComponent,
    CryptocurrencyPriceComponent,
    CryptoAnnotationComponent,
    StockMarketComponent,
    FinanceComponent,
    OrderStatus2Component,
    MonthlySalesComponent,
    UsersComponent,
    CommonTopChartComponent,
    CommonCurrencyComponent,
    CommonAvarageOfdayComponent,
    CommonProductStatusChartboxComponent,
    CommonSocialmediaComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    NgApexchartsModule,
    NgbDatepickerModule,
    SharedModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class WidgetsModule { }
