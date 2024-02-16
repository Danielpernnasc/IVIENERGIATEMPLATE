import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table'

@Component({
  selector: 'app-dashed-border',
  templateUrl: './dashed-border.component.html',
  styleUrls: ['./dashed-border.component.scss']
})
export class DashedBorderComponent {

  public dashedBorderData = Data.dashedBorderData;
  
}
