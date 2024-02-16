import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-warning-state',
  templateUrl: './warning-state.component.html',
  styleUrls: ['./warning-state.component.scss']
})
export class WarningStateComponent {

  public warningStateCardData = Data.warningStateCardData;
  
}
