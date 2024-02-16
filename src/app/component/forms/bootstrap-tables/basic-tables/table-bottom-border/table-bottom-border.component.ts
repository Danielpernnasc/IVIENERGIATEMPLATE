import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table'

@Component({
  selector: 'app-table-bottom-border',
  templateUrl: './table-bottom-border.component.html',
  styleUrls: ['./table-bottom-border.component.scss']
})
export class TableBottomBorderComponent {

  public tableData = Data.commonTableData;

}
