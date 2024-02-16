import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SupportTicketRoutingModule } from './support-ticket-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { SupportTicketComponent } from './support-ticket.component';
import { TicketBoardComponent } from './ticket-board/ticket-board.component';
import { NgbdSortableHeader2 } from '../../shared/directive/support-ticket.directive';
import { DataTableComponent } from './data-table/data-table.component';
import { SupportTicketService } from '../../shared/services/support-ticket/support-ticket.service';


@NgModule({
  declarations: [
    SupportTicketComponent,
    TicketBoardComponent,
    NgbdSortableHeader2,
    DataTableComponent,
  ],
  imports: [
    CommonModule,
    SupportTicketRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ],
  providers: [SupportTicketService, DecimalPipe],
})
export class SupportTicketModule { }
