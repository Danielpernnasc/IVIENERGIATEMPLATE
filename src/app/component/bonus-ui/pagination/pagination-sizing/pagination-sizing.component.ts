import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/pagination';

@Component({
  selector: 'app-pagination-sizing',
  templateUrl: './pagination-sizing.component.html',
  styleUrls: ['./pagination-sizing.component.scss']
})
export class PaginationSizingComponent {

  public paginationSizingData = Data.paginationSizingData;
  
}
