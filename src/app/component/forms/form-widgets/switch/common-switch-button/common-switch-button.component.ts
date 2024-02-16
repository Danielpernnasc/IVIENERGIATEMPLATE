import { Component ,Input} from '@angular/core';
import { commonSwitch } from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-common-switch-button',
  templateUrl: './common-switch-button.component.html',
  styleUrls: ['./common-switch-button.component.scss']
})
export class CommonSwitchButtonComponent {

@Input() data : commonSwitch;

}
