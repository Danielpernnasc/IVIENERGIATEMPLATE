import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-with-icon-accordion',
  templateUrl: './with-icon-accordion.component.html',
  styleUrls: ['./with-icon-accordion.component.scss']
})
export class WithIconAccordionComponent {

  public accordionWithIconData = Data.accordionWithIconData;
  
}
