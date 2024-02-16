import { Component ,Input} from '@angular/core';
import { Simplepricingcard } from '../../../../shared/data/data/ecommerce/common-pricing-data';

@Component({
  selector: 'app-common-simple-pricing-card',
  templateUrl: './common-simple-pricing-card.component.html',
  styleUrls: ['./common-simple-pricing-card.component.scss']
})
export class CommonSimplePricingCardComponent {

  @Input() data : Simplepricingcard;

}
