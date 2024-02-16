import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-edge-buttons',
  templateUrl: './edge-buttons.component.html',
  styleUrls: ['./edge-buttons.component.scss']
})
export class EdgeButtonsComponent {

  public edgeButtonData= Data.edgeButtonData;
  public edgeOutlinedButtonsData= Data.edgeOutlinedButtonsData;
  public edgeGradienButtonData= Data.edgeGradienButtonData;
}
