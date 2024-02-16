import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table'

@Component({
  selector: 'app-stripe-row-inverse',
  templateUrl: './stripe-row-inverse.component.html',
  styleUrls: ['./stripe-row-inverse.component.scss']
})
export class StripeRowInverseComponent {

  public stripeRowInverseData = Data.stripeRowInverseData;
  
}
