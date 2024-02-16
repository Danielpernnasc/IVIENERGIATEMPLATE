import { Component } from '@angular/core';
import { ticketListStatus } from '../../../shared/data/data/support-ticket/support-ticket';

@Component({
  selector: 'app-ticket-board',
  templateUrl: './ticket-board.component.html',
  styleUrls: ['./ticket-board.component.scss']
})
export class TicketBoardComponent {

  public ticketListStatus = ticketListStatus;

}
