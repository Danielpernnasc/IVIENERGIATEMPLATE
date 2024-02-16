import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapTablesRoutingModule } from './bootstrap-tables-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { NgbAlertModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { BasicTablesComponent } from './basic-tables/basic-tables.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { TableBottomBorderComponent } from './basic-tables/table-bottom-border/table-bottom-border.component';
import { InverseTableComponent } from './basic-tables/inverse-table/inverse-table.component';
import { InverseTablePrimarybgComponent } from './basic-tables/inverse-table-primarybg/inverse-table-primarybg.component';
import { CaptionComponent } from './basic-tables/caption/caption.component';
import { HeadOptionComponent } from './basic-tables/head-option/head-option.component';
import { StripeRowInverseComponent } from './basic-tables/stripe-row-inverse/stripe-row-inverse.component';
import { BackpointComponent } from './basic-tables/backpoint/backpoint.component';
import { ResponsiveLightbgComponent } from './basic-tables/responsive-lightbg/responsive-lightbg.component';
import { SizingTableComponent } from './basic-tables/sizing-table/sizing-table.component';
import { DashedBorderComponent } from './basic-tables/dashed-border/dashed-border.component';
import { CustomHoverStripedComponent } from './basic-tables/custom-hover-striped/custom-hover-striped.component';
import { HoverRowHorizontialComponent } from './basic-tables/hover-row-horizontial/hover-row-horizontial.component';
import { UiComponentComponent } from './table-component/ui-component/ui-component.component';
import { AlertsComponent } from './table-component/alerts/alerts.component';
import { ProgressbarComponent } from './table-component/progressbar/progressbar.component';
import { CheckboxComponent } from './table-component/checkbox/checkbox.component';
import { RadiobuttonsComponent } from './table-component/radiobuttons/radiobuttons.component';
import { SelectComponent } from './table-component/select/select.component';
import { InputComponent } from './table-component/input/input.component';
import { BadgeComponent } from './table-component/badge/badge.component';
import { TooltipTriggerComponent } from './table-component/tooltip-trigger/tooltip-trigger.component';
import { SwitchComponent } from './table-component/switch/switch.component';


@NgModule({
  declarations: [
    BasicTablesComponent,
    TableComponentComponent,
    TableBottomBorderComponent,
    InverseTableComponent,
    HoverRowHorizontialComponent,
    InverseTablePrimarybgComponent,
    CaptionComponent,
    HeadOptionComponent,
    StripeRowInverseComponent,
    BackpointComponent,
    ResponsiveLightbgComponent,
    SizingTableComponent,
    DashedBorderComponent,
    CustomHoverStripedComponent,
    UiComponentComponent,
    AlertsComponent,
    ProgressbarComponent,
    CheckboxComponent,
    RadiobuttonsComponent,
    SelectComponent,
    InputComponent,
    BadgeComponent,
    TooltipTriggerComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    BootstrapTablesRoutingModule,
    SharedModule,
    NgbAlertModule,
    NgbProgressbarModule
  ]
})
export class BootstrapTablesModule { }
