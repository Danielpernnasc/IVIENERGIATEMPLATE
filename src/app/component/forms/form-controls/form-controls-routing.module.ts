import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationComponent } from './validation/validation.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { MegaOptionComponent } from './mega-option/mega-option.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'form-validation',
        component : ValidationComponent,
        data : {
          title : 'Validation Forms',
          breadcrumb : 'Validation Forms'
        }
      },
      {
        path : 'base-input',
        component : BaseInputComponent,
        data : {
          title : 'Base Inputs',
          breadcrumb : 'Base Inputs'
        }
      },
      {
        path : 'checkbox-radio',
        component : CheckboxRadioComponent,
        data : {
          title : 'Checkbox & Radio',
          breadcrumb : 'Checkbox & Radio'
        }
      },
      {
        path : 'input-groups',
        component : InputGroupComponent,
        data : {
          title : 'Input Groups',
          breadcrumb : 'Input Groups'
        }
      },
      {
        path : 'mega-options',
        component : MegaOptionComponent,
        data : {
          title : 'Mega Options',
          breadcrumb : 'Mega Options'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormControlsRoutingModule { }
