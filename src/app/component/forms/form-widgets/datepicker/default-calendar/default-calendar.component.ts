import { Component } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-default-calendar',
  templateUrl: './default-calendar.component.html',
  styleUrls: ['./default-calendar.component.scss']
})
export class DefaultCalendarComponent {

  public date: { year: number, month: number; } ;

  constructor(private calendar: NgbCalendar) {}
  
}
