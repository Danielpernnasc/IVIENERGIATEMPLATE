import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/grid'
@Component({
  selector: 'app-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss']
})
export class GridColumnComponent {

  public gridColumnData = Data.gridColumnData;
  
}
