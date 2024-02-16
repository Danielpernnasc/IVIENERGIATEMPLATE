import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormWidgetsRoutingModule } from './form-widgets-routing.module';
import { NgbDatepickerModule, NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { TouchspinComponent } from './touchspin/touchspin.component';
import { Select2Component } from './select2/select2.component';
import { SwitchComponent } from './switch/switch.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { CommonTouchspinComponent } from './touchspin/common-touchspin/common-touchspin.component';
import { IconWithPrefixComponent } from './touchspin/icon-with-prefix/icon-with-prefix.component';
import { ButtonWithPrefixComponent } from './touchspin/button-with-prefix/button-with-prefix.component';
import { RoundedTouchspinComponent } from './touchspin/rounded-touchspin/rounded-touchspin.component';
import { CustomSwitchComponent } from './switch/custom-switch/custom-switch.component';
import { CommonSwitchButtonComponent } from './switch/common-switch-button/common-switch-button.component';
import { DisableOutlineComponent } from './switch/disable-outline/disable-outline.component';
import { VariationOfSwitchesComponent } from './switch/variation-of-switches/variation-of-switches.component';
import { SwitchSizingComponent } from './switch/switch-sizing/switch-sizing.component';
import { SwitchWithIconComponent } from './switch/switch-with-icon/switch-with-icon.component';
import { SimpleTypeaheadComponent } from './typeahead/simple-typeahead/simple-typeahead.component';
import { OpenOnFocusComponent } from './typeahead/open-on-focus/open-on-focus.component';
import { FormattedResultComponent } from './typeahead/formatted-result/formatted-result.component';
import { SelectOnExactComponent } from './typeahead/select-on-exact/select-on-exact.component';
import { WikipediaSearchComponent } from './typeahead/wikipedia-search/wikipedia-search.component';
import { TemplateForResultsComponent } from './typeahead/template-for-results/template-for-results.component';
import { PreventManualEntryComponent } from './typeahead/prevent-manual-entry/prevent-manual-entry.component';
import { GlobalComponent } from './typeahead/global/global.component';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { DefaultCalendarComponent } from './datepicker/default-calendar/default-calendar.component';
import { DatePickerComponent } from './datepicker/date-picker/date-picker.component';
import { DateTimePickerComponent } from './datepicker/date-time-picker/date-time-picker.component';
import { ColorVariantComponent } from './select2/color-variant/color-variant.component';
import { FullColorVariantComponent } from './select2/full-color-variant/full-color-variant.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    TouchspinComponent,
    Select2Component,
    SwitchComponent,
    TypeaheadComponent,
    ClipboardComponent,
    CommonTouchspinComponent,
    IconWithPrefixComponent,
    ButtonWithPrefixComponent,
    RoundedTouchspinComponent,
    CustomSwitchComponent,
    CommonSwitchButtonComponent,
    DisableOutlineComponent,
    VariationOfSwitchesComponent,
    SwitchSizingComponent,
    SwitchWithIconComponent,
    SimpleTypeaheadComponent,
    OpenOnFocusComponent,
    FormattedResultComponent,
    SelectOnExactComponent,
    WikipediaSearchComponent,
    TemplateForResultsComponent,
    PreventManualEntryComponent,
    GlobalComponent,
    DefaultCalendarComponent,
    DatePickerComponent,
    DateTimePickerComponent,
    ColorVariantComponent,
    FullColorVariantComponent
  ],
  imports: [
    CommonModule,
    FormWidgetsRoutingModule,
    SharedModule,
    NgbTypeaheadModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgbTypeahead,
    ClipboardModule,
    NgbDatepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgSelectModule
  ]
})
export class FormWidgetsModule { }
