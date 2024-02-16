import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table'

@Component({
  selector: 'app-sizing-table',
  templateUrl: './sizing-table.component.html',
  styleUrls: ['./sizing-table.component.scss']
})
export class SizingTableComponent {

  public sizingTableData = Data.sizingTableData;

}
