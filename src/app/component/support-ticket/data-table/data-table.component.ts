import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { supportDB } from '../../../shared/data/data/support-ticket/support-ticket';
import { NgbdSortableHeader2, SortEvent } from '../../../shared/directive/support-ticket.directive';
import { SupportTicketService } from '../../../shared/services/support-ticket/support-ticket.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],

})
export class DataTableComponent {

  countries$: Observable<supportDB[]>;
  total$: Observable<number>;


  @ViewChildren(NgbdSortableHeader2) headers: QueryList<NgbdSortableHeader2>;

  constructor(public service: SupportTicketService) {
    this.countries$ = service.support$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
