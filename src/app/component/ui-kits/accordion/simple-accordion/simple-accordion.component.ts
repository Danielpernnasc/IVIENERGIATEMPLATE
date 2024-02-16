import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-simple-accordion',
  templateUrl: './simple-accordion.component.html',
  styleUrls: ['./simple-accordion.component.scss']
})
export class SimpleAccordionComponent {

  public simpleAccordionData = Data.simpleAccordionData;
  
}
