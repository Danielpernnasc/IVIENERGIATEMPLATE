import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/ecommerce/common-pricing-data'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  public becomememberData = Data.BecomeMember;
  public simplepricingcardData = Data.SimplePricingCard;

}
