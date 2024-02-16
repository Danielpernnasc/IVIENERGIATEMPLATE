import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/basic-cards';

@Component({
  selector: 'app-common-info-color-cards',
  templateUrl: './common-info-color-cards.component.html',
  styleUrls: ['./common-info-color-cards.component.scss']
})
export class CommonInfoColorCardsComponent {

  public commonInfoColorCardData = Data.commonInfoColorCardData;
  
}
