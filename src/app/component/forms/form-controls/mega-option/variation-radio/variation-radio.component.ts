import { Component } from '@angular/core';
import * as Data from "../../../../../shared/data/data/forms/form-control"

@Component({
  selector: 'app-variation-radio',
  templateUrl: './variation-radio.component.html',
  styleUrls: ['./variation-radio.component.scss']
})
export class VariationRadioComponent {

  public variationRadioPayment = Data.variationRadioPaymentData;
  public variationRadioDesign = Data.variationRadioDesign;
  public variationRadioIcon = Data.variationRadioIcon;

}
