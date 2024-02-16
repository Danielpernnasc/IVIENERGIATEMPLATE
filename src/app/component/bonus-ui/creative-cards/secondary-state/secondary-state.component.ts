import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-secondary-state',
  templateUrl: './secondary-state.component.html',
  styleUrls: ['./secondary-state.component.scss']
})
export class SecondaryStateComponent {

  public secondaryStateCardData = Data.secondaryStateCardData;
  
}
