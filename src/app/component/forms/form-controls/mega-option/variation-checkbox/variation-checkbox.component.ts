import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-control'

@Component({
  selector: 'app-variation-checkbox',
  templateUrl: './variation-checkbox.component.html',
  styleUrls: ['./variation-checkbox.component.scss']
})
export class VariationCheckboxComponent {

  public variationCheckbox = Data.variationCheckbox;
  public themeSale = Data.themeSale;

}
