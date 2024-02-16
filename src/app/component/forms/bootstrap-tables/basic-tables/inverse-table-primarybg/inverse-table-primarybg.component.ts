import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table'

@Component({
  selector: 'app-inverse-table-primarybg',
  templateUrl: './inverse-table-primarybg.component.html',
  styleUrls: ['./inverse-table-primarybg.component.scss']
})
export class InverseTablePrimarybgComponent {

  public tableData = Data.commonTableData;
   
}
