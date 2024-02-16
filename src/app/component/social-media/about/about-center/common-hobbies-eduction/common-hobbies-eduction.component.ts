import { Component ,Input} from '@angular/core';
import { hobbiesEduction } from '../../../../../shared/data/data/social-media/social-media-data';

@Component({
  selector: 'app-common-hobbies-eduction',
  templateUrl: './common-hobbies-eduction.component.html',
  styleUrls: ['./common-hobbies-eduction.component.scss']
})
export class CommonHobbiesEductionComponent {

  @Input() data : hobbiesEduction;

}
