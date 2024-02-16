import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-common-absolute-card',
  templateUrl: './common-absolute-card.component.html',
  styleUrls: ['./common-absolute-card.component.scss']
})
export class CommonAbsoluteCardComponent {

  public commonAbsoluteCardData = Data.commonAbsoluteCardData;
  
}
