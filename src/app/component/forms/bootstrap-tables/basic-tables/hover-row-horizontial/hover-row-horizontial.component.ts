import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table'


@Component({
  selector: 'app-hover-row-horizontial',
  templateUrl: './hover-row-horizontial.component.html',
  styleUrls: ['./hover-row-horizontial.component.scss']
})
export class HoverRowHorizontialComponent {

  public hoverRowHorizontialData = Data.hoverableRowHorizontialData;

}
