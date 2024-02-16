import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlsRoutingModule } from './form-controls-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ValidationComponent } from './validation/validation.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { MegaOptionComponent } from './mega-option/mega-option.component';
import { TooltipFormComponent } from './validation/tooltip-form/tooltip-form.component';
import { BrowserDefaultComponent } from './validation/browser-default/browser-default.component';
import { ValiditionFormComponent } from './validation/validition-form/validition-form.component';
import { BasicFormComponent } from './base-input/basic-form/basic-form.component';
import { FloatingFormComponent } from './base-input/floating-form/floating-form.component';
import { SelectSizingComponent } from './base-input/select-sizing/select-sizing.component';
import { FormControlSizingComponent } from './base-input/form-control-sizing/form-control-sizing.component';
import { FileInputComponent } from './base-input/file-input/file-input.component';
import { FlatInputStyleComponent } from './base-input/flat-input-style/flat-input-style.component';
import { BasicHtmlInputComponent } from './base-input/basic-html-input/basic-html-input.component';
import { BasicFloatingInputComponent } from './base-input/basic-floating-input/basic-floating-input.component';
import { EdgeInputComponent } from './base-input/edge-input/edge-input.component';
import { RaiseInputComponent } from './base-input/raise-input/raise-input.component';
import { DefaultCheckboxComponent } from './checkbox-radio/default-checkbox/default-checkbox.component';
import { CustomeCheckboxComponent } from './checkbox-radio/custome-checkbox/custome-checkbox.component';
import { DefaultRadioComponent } from './checkbox-radio/default-radio/default-radio.component';
import { ImagesCheckboxComponent } from './checkbox-radio/images-checkbox/images-checkbox.component';
import { ImagesRadioComponent } from './checkbox-radio/images-radio/images-radio.component';
import { CustomRadioComponent } from './checkbox-radio/custom-radio/custom-radio.component';
import { DefaultSwitchComponent } from './checkbox-radio/default-switch/default-switch.component';
import { InlineInputTypeComponent } from './checkbox-radio/inline-input-type/inline-input-type.component';
import { AnimatedButtonsComponent } from './checkbox-radio/animated-buttons/animated-buttons.component';
import { BasicRadioCheckboxComponent } from './checkbox-radio/basic-radio-checkbox/basic-radio-checkbox.component';
import { RadioToggleButtonComponent } from './checkbox-radio/radio-toggle-button/radio-toggle-button.component';
import { OutlinedCheckboxComponent } from './checkbox-radio/outlined-checkbox/outlined-checkbox.component';
import { ButtonAddonsComponent } from './input-group/button-addons/button-addons.component';
import { CustomFormsComponent } from './input-group/custom-forms/custom-forms.component';
import { CustomFileInputComponent } from './input-group/custom-file-input/custom-file-input.component';
import { ButtonDropdownComponent } from './input-group/button-dropdown/button-dropdown.component';
import { SegmentedButtonComponent } from './input-group/segmented-button/segmented-button.component';
import { SizingComponent } from './input-group/sizing/sizing.component';
import { MultipleInputsComponent } from './input-group/multiple-inputs/multiple-inputs.component';
import { BasicInputGroupsComponent } from './input-group/basic-input-groups/basic-input-groups.component';
import { VariationAddonsComponent } from './input-group/variation-addons/variation-addons.component';
import { CheckboxradioComponent } from './input-group/checkboxradio/checkboxradio.component';
import { VariationRadioComponent } from './mega-option/variation-radio/variation-radio.component';
import { VariationCheckboxComponent } from './mega-option/variation-checkbox/variation-checkbox.component';
import { DefaultStyleComponent } from './mega-option/default-style/default-style.component';
import { WithoutBorderComponent } from './mega-option/without-border/without-border.component';
import { SolidBorderComponent } from './mega-option/solid-border/solid-border.component';
import { OfferStyleBorderComponent } from './mega-option/offer-style-border/offer-style-border.component';
import { InlineStyleComponent } from './mega-option/inline-style/inline-style.component';
import { VerticleStyleComponent } from './mega-option/verticle-style/verticle-style.component';
import { HorizontialStyleComponent } from './mega-option/horizontial-style/horizontial-style.component';
import { DateTimeComponent } from './base-input/basic-html-input/date-time/date-time.component';




@NgModule({
  declarations: [
    ValidationComponent,
    BaseInputComponent,
    CheckboxRadioComponent,
    InputGroupComponent,
    MegaOptionComponent,
    TooltipFormComponent,
    BrowserDefaultComponent,
    ValiditionFormComponent,
    BasicFormComponent,
    FloatingFormComponent,
    SelectSizingComponent,
    FormControlSizingComponent,
    FileInputComponent,
    FlatInputStyleComponent,
    BasicHtmlInputComponent,
    BasicFloatingInputComponent,
    EdgeInputComponent,
    RaiseInputComponent,
    DefaultCheckboxComponent,
    CustomeCheckboxComponent,
    DefaultRadioComponent,
    ImagesCheckboxComponent,
    ImagesRadioComponent,
    CustomRadioComponent,
    DefaultSwitchComponent,
    InlineInputTypeComponent,
    AnimatedButtonsComponent,
    BasicRadioCheckboxComponent,
    RadioToggleButtonComponent,
    OutlinedCheckboxComponent,
    ButtonAddonsComponent,
    CustomFormsComponent,
    CustomFileInputComponent,
    ButtonDropdownComponent,
    SegmentedButtonComponent,
    SizingComponent,
    MultipleInputsComponent,
    BasicInputGroupsComponent,
    VariationAddonsComponent,
    CheckboxradioComponent,
    VariationRadioComponent,
    VariationCheckboxComponent,
    DefaultStyleComponent,
    WithoutBorderComponent,
    SolidBorderComponent,
    OfferStyleBorderComponent,
    InlineStyleComponent,
    VerticleStyleComponent,
    HorizontialStyleComponent,
    DateTimeComponent,

  ],
  imports: [
    CommonModule,
    FormControlsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    AngularSvgIconModule.forRoot(),

  ], 
  exports: [
    ValiditionFormComponent,
    ValidationComponent,
    TooltipFormComponent
  ]
})
export class FormControlsModule { }
