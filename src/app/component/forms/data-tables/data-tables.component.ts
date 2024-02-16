import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { SortableDirective, SortEvent } from '../../../shared/directive/sortable.directive';
import { TablesService } from '../../../shared/services/tables/tables.service';
import { DecimalPipe } from '@angular/common';
import { sellingProduct } from '../../../shared/data/data/default-dashboard/best-selling-product';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss'],
  providers: [TablesService, DecimalPipe]
})
export class DataTablesComponent {

  selling$ : Observable<sellingProduct[]>;
  total$ : Observable<number>;

  @ViewChildren(SortableDirective) headers!: QueryList<SortableDirective>;

  constructor(public service : TablesService) {
    this.selling$ = service.selling$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent){
    this.headers.forEach((header) => {
      if(header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  removeItem(id: number){
    this.selling$.subscribe((data: sellingProduct[])=> {
      data.map((elem: sellingProduct,i: number)=>{elem.id == id && data.splice(i,1)})
    })
  }
}
