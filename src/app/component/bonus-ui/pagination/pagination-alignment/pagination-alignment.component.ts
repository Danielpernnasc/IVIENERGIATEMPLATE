import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/pagination';

@Component({
  selector: 'app-pagination-alignment',
  templateUrl: './pagination-alignment.component.html',
  styleUrls: ['./pagination-alignment.component.scss']
})
export class PaginationAlignmentComponent {

  public paginationAlignmentData = Data.paginationAlignmentData;
  
}
