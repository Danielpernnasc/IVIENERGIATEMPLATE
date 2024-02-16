import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-grid-option',
  templateUrl: './grid-option.component.html',
  styleUrls: ['./grid-option.component.scss']
})
export class GridOptionComponent {

  public gridOptionData = Data.gridOptionData;
  public gridOptionData2 = Data.gridOptionData2;
  public gridOptionData3 = Data.gridOptionData3;

}
