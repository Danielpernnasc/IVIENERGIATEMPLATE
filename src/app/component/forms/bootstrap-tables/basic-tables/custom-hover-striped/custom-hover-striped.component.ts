import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table'

@Component({
  selector: 'app-custom-hover-striped',
  templateUrl: './custom-hover-striped.component.html',
  styleUrls: ['./custom-hover-striped.component.scss']
})
export class CustomHoverStripedComponent {

  public customHoverTableData = Data.customHoverStripedData;
  
}
