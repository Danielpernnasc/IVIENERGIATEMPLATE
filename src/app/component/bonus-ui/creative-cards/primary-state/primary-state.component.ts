import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-primary-state',
  templateUrl: './primary-state.component.html',
  styleUrls: ['./primary-state.component.scss']
})
export class PrimaryStateComponent {

 public primaryStateCardData = Data.primaryStateCardData;
 
}
