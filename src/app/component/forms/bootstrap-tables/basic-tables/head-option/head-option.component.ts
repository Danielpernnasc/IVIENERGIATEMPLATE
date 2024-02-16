import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table'

@Component({
  selector: 'app-head-option',
  templateUrl: './head-option.component.html',
  styleUrls: ['./head-option.component.scss']
})
export class HeadOptionComponent {

  public headOptionData = Data.headOptionData;
  
}
