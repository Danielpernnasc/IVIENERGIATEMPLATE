import { Component ,Input} from '@angular/core';
import { Becomemember } from '../../../../shared/data/data/ecommerce/common-pricing-data';

@Component({
  selector: 'app-common-become-member',
  templateUrl: './common-become-member.component.html',
  styleUrls: ['./common-become-member.component.scss']
})
export class CommonBecomeMemberComponent {

  @Input() data : Becomemember;
}
