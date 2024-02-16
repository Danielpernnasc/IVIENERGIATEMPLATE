import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-common-border-position-card',
  templateUrl: './common-border-position-card.component.html',
  styleUrls: ['./common-border-position-card.component.scss']
})
export class CommonBorderPositionCardComponent {

  public commonBorderPositionCardData = Data.commonBorderPositionCardData;
  
}
