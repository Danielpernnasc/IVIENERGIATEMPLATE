import { Component,Input } from '@angular/core';
import { Allcontact } from '../../../../../shared/data/data/contacts/all-contact';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {

  @Input() selectedData : Allcontact;


}
