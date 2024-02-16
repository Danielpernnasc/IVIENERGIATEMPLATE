import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonDefaultButtonGroupComponent } from './button-group/common-default-button-group/common-default-button-group.component';
import { DefaultButtonsComponent } from './default-buttons/default-buttons.component';
import { FlatButtonsComponent } from './flat-buttons/flat-buttons.component';
import { EdgeButtonsComponent } from './edge-buttons/edge-buttons.component';
import { RaisedButtonsComponent } from './raised-buttons/raised-buttons.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CommonLargeButtonGroupComponent } from './button-group/common-large-button-group/common-large-button-group.component';
import { CommonOutlineCustomButtonGroupComponent } from './button-group/common-outline-custom-button-group/common-outline-custom-button-group.component';
import { CommonOutlineButtonGroupComponent } from './button-group/common-outline-button-group/common-outline-button-group.component';
import { RadioButtonGroupComponent } from './button-group/radio-button-group/radio-button-group.component';
import { CheckboxButtonGroupComponent } from './button-group/checkbox-button-group/checkbox-button-group.component';
import { NestingButtonGroupComponent } from './button-group/nesting-button-group/nesting-button-group.component';
import { VerticalButtonGroupComponent } from './button-group/vertical-button-group/vertical-button-group.component';


@NgModule({
  declarations: [
    DefaultButtonsComponent,
    FlatButtonsComponent,
    EdgeButtonsComponent,
    RaisedButtonsComponent,
    ButtonGroupComponent,
    CommonDefaultButtonGroupComponent,
    CommonLargeButtonGroupComponent,
    CommonOutlineCustomButtonGroupComponent,
    CommonOutlineButtonGroupComponent,
    RadioButtonGroupComponent,
    CheckboxButtonGroupComponent,
    NestingButtonGroupComponent,
    VerticalButtonGroupComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    NgbTooltipModule
  ]
})
export class ButtonsModule { }
