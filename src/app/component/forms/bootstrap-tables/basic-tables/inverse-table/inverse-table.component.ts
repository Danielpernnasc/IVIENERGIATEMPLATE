import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table'

@Component({
  selector: 'app-inverse-table',
  templateUrl: './inverse-table.component.html',
  styleUrls: ['./inverse-table.component.scss']
})
export class InverseTableComponent {

  public inverseTableData =  Data.inverseTableData
}
