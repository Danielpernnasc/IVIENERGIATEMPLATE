import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table'

@Component({
  selector: 'app-backpoint',
  templateUrl: './backpoint.component.html',
  styleUrls: ['./backpoint.component.scss']
})
export class BackpointComponent {

  public backPointData = Data.backpointData;

}
