import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-outlined-accordion',
  templateUrl: './outlined-accordion.component.html',
  styleUrls: ['./outlined-accordion.component.scss']
})
export class OutlinedAccordionComponent {

  public simpleAccordionData = Data.simpleAccordionData;

}
